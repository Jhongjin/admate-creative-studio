import { C, addBackground, footer, label, line, paper, smallText, subcopy, title } from "./shared.mjs";

export async function slide06(presentation, ctx) {
  const slide = presentation.slides.add();
  addBackground(slide, ctx, "paper");
  title(slide, ctx, "남겨야 할 것은\n결과보다 이유입니다.");
  subcopy(
    slide,
    ctx,
    "어떤 기준을 봤고, 왜 통과했는지 남아야 다음 업무에서 다시 쓸 수 있습니다.\n좋은 판단이 개인의 기억에만 남지 않게 하는 것이 핵심입니다.",
  );

  paper(slide, ctx, 528, 104, 610, 456, { name: "decision-ledger", fill: C.soft });
  label(slide, ctx, "판단 근거 기록", 560, 132, 154, C.teal);
  const fields = ["상황", "확인 기준", "증빙", "판단", "재사용 후보"];
  fields.forEach((field, i) => {
    const y = 202 + i * 62;
    smallText(slide, ctx, field, 560, y, 180, 22, C.ink, 19, true);
    line(slide, ctx, 780, y + 11, 280, i === 3 ? C.rust : C.line, i === 3 ? 3 : 1);
    if (i === 3) {
      smallText(slide, ctx, "판단 이유가 남아야 합니다.", 786, y + 21, 230, 20, C.rust, 15, true);
    }
  });
  ctx.addShape(slide, { x: 532, y: 386, w: 602, h: 58, fill: "#FFF2EA", line: ctx.line(C.rust, 1), name: "highlight-row" });

  footer(slide, ctx);
  return slide;
}
