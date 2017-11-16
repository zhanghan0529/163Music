export default function tabs(node){
  node.on("click",function() {
    $(this)
      .addClass("active1")
      .siblings()
      .removeClass("active1");
    // console.log($(this).index())
    // console.log($(".contents-list > li").eq($(this).index()));
    $(".contents-list > li")
      .eq($(this).index())
      .removeClass("active")
      .siblings()
      .addClass("active");
  });
}

// module.exports = tbs 