const { App } = require('@slack/bolt');
const {
  BOT_TOKEN,
  SLACK_SIGNING_SECERET,
  PORT,
} = require('./config.json')

const app = new App({
  signingSecret: SLACK_SIGNING_SECERET,
  token: BOT_TOKEN,
});

(async () => {
  await app.start(PORT || 3000);

  console.log('Bolt run app');
})();
