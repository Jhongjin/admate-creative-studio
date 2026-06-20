import { C, addBackground, footer, label, line, paper, smallText, subcopy, title } from "./shared.mjs";

export async function slide10(presentation, ctx) {
  const slide = presentation.slides.add();
  addBackground(slide, ctx, "dark");
  title(slide, ctx, "작게 시작하고, 남기고,\n검증된 것만 넓힙니다.", 72, 74, 520, true);
  subcopy(
    slide,
    ctx,
    "AdMate의 출발점은 거창한 자동화가 아닙니다.\n반복되는 확인을 줄이고, 다음 운영에 쓸 기준을 남기는 것입니다.",
    72,
    226,
    560,
    true,
  );

  paper(slide, ctx, 644, 94, 474, 482, { fill: C.soft, line: "#DDD0BE", name: "expansion-charter" });
  label(slide, ctx, "확장 원칙", 676, 126, 116, C.teal);
  const principles = [
    ["01", "작게 시작", "작은 업무에서 확인합니다."],
    ["02", "이유를 남김", "판단 이유를 남깁니다."],
    ["03", "검증 후 확장", "검증된 흐름만 넓힙니다."],
  ];
  principles.forEach(([num, head, body], i) => {
    const y = 196 + i * 82;
    smallText(slide, ctx, num, 676, y + 4, 34, 18, C.brass, 15, true);
    smallText(slide, ctx, head, 730, y, 240, 22, C.ink, 22, true);
    smallText(slide, ctx, body, 730, y + 34, 230, 20, C.muted, 16);
    line(slide, ctx, 730, y + 62, 300, C.line, 1);
  });
  ctx.addShape(slide, { x: 676, y: 468, w: 360, h: 56, fill: "#FFF5E6", line: ctx.line(C.brass, 1), name: "unsigned-field" });
  smallText(slide, ctx, "파일럿 범위 / 담당 / 현재 기준", 704, 486, 280, 20, C.muted, 17);

  footer(slide, ctx, true);
  return slide;
}
