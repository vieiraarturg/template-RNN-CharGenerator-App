// ---------------------------------------------------------
// CharRNNGenerator — UMD global version (NO exports/imports)
// ---------------------------------------------------------

class CharRNNGenerator {

  constructor(){
    this.model = null;
    this.vocabSize = 256;
  }

  async buildModel(){
    this.model = tf.sequential();

    this.model.add(tf.layers.simpleRNN({
      units: 128,
      inputShape: [1, 1],
      returnSequences: true
    }));

    this.model.add(tf.layers.dense({
      units: 1,
      activation: 'linear'
    }));

    this.model.compile({
      optimizer: 'adam',
      loss: 'meanSquaredError'
    });
  }

  async generate(seed = '', maxLen = 150, temperature = 0.8){
    if(!this.model) return 'Model not loaded';

    let input = seed.split('').map(c => c.charCodeAt(0) / 255);
    const result = [];

    for(let i=0; i<maxLen; i++){
      let x = tf.tensor(input.slice(-1), [1, 1, 1]);
      let y = this.model.predict(x);

      // TF.js async output
      let val = (await y.data())[0];

      y.dispose();
      x.dispose();

      // normalize to 0–1
      val = Math.min(Math.max(val, 0), 1);

      // convert to character
      const charCode = Math.round(val * 255);
      result.push(String.fromCharCode(charCode));

      // feed back
      input.push(val);
    }

    // IMPORTANT FIX: ensure we return the string
    return result.join('');
  }
}

// ---------------------------------------------------------
// Expose globally for non-module <script> in index.html
// ---------------------------------------------------------
window.CharRNNGenerator = CharRNNGenerator;
