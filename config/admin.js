module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '7aa8ebf43037d666b218f22f64ccfffb'),
  },
});
