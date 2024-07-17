
/**
 * 适配手机：Honor V9
 * 屏幕：1080 1920
 */
for (var i = 0; i < 40; i++) {
  gesture(1000, [204, 602], [204, 399]); //滑动列表
  sleep(2000);
  click(339, 242); //点击列表中的一个人
  sleep(1000);

  //点击打招呼
  var element = id("b38").findOne();
  let b = element.bounds();
  click(b.left, b.top - 200);

  sleep(1000);

  let txt = className("EditText").findOne();
  txt.setText("hi");
  click(969, 151); //发送按钮
  sleep(4000);

  click(54, 159); //返回
  sleep(1000);
}
