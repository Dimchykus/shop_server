import  http from "http";

const PORT = process.env.PORT || 4000

var app = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/plain" });
  var message = "It works!\n",
    version = "NodeJS " + process.versions.node + "\n",
    response = [message, version].join("\n");
  res.end(response);
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
