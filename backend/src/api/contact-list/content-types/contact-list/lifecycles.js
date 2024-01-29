module.exports = {
  async afterCreate(event) {
    const { data } = event.params;
    const sendTo = data?.email;
    const emailOptions = {
      to: sendTo,
      from: "sunilram573@gmail.com",
      replyTo: "sunilram573@gmail.com",
      subject: "Welcome to Our Website",
      text: "Thank you for signing up!",
      html: "Thank you for signing up!",
    };
    try {
      await strapi.plugins["email"].services.email.send(emailOptions);
    } catch (err) {
      console.log(err);
    }
  },
};
