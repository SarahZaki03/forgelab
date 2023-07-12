module.exports = {
  credentials: {
    client_id: "IA0IfdazhxZqPXMboOfx0s0dOcwGxQUp",
    client_secret: "k1QWvN1IRcWjj51d",
    callback_url: "http://localhost:3000/",
  },
  scopes: {
    internal: [
      "bucket: create",
      "bucket: read",
      "data:read",
      "data:create",
      "data:write",
    ],
    public: ["viewables:read"],
  },
};
