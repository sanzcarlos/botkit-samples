
module.exports = function(controller) {
  controller.hears(["list"], "direct_message,direct_mention", function(
    bot,
    message
  ) {
    var email = message.user;
    var CiscoSpark = require('node-ciscospark');
    var async = require('async');
    var spark = new CiscoSpark(process.env.SPARK_TOKEN);

    var param = {};

    spark.people.me(function(err, response) {
      console.log(err);
      console.log(response);
    });
    bot.reply(message, '```json\n' + response + '\n```');
  });
}