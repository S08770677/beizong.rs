const article = async (ctx) => {
  console.log("详情", ctx.params.id, ctx.req.query);
  await ctx.render("article", {
    message: "Hello world!",
    content: "aaaa",
    lang: "zh-CN",
  });
};

export default article;
