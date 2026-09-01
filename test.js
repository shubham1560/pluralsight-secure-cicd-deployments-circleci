const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("fs");

test("page includes the app name", () => {
  const html = fs.readFileSync("index.html", "utf8");
  assert.match(html, /Secure orders/);
});
