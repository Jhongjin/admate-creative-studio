import { C, addBackground, footer, label, line, paper, smallText, subcopy, title } from "./shared.mjs";

export async function slide05(presentation, ctx) {
  const slide = presentation.slides.add();
  addBackground(slide, ctx, "dark");
  title(slide, ctx, "Agent Core는\n흐름을 묶습니다.", 72, 74, 400, true);
  subcopy(
    slide,
    ctx,
    "각 서비스의 결과가 따로 끝나지 않게 실행, 기록, 권한, 승인 이력을 연결합니다.\n최종 판단과 승인은 사람이 합니다.",
    72,
    226,
    380,
    true,
  );

  ctx.addShape(slide, { x: 700, y: 104, w: 48, h: 456, fill: C.teal, line: ctx.line(C.teal, 0), name: "approval-spine" });
  label(slide, ctx, "CONTROL LAYER", 648, 80, 164, C.brass);

  const left = [
    ["권한", "누가 실행할 수 있는가"],
    ["실행 기록", "무엇을 실행했는가"],
  ];
  const right = [
    ["승인", "어디서 승인했는가"],
    ["학습 후보", "다음에 다시 쓸 기준인가"],
  ];
  left.forEach(([head, body], i) => {
    const y = 160 + i * 170;
    paper(slide, ctx, 458, y, 196, 104, { fill: "#FFF9EF", line: "#DED2C0", name: "left-control" });
    smallText(slide, ctx, head, 482, y + 22, 150, 20, C.ink, 20, true);
    smallText(slide, ctx, body, 482, y + 58, 150, 20, C.muted, 14);
    line(slide, ctx, 654, y + 52, 46, C.brass, 2);
  });
  right.forEach(([head, body], i) => {
    const y = 160 + i * 170;
    paper(slide, ctx, 794, y, 248, 104, { fill: "#FFF9EF", line: "#DED2C0", name: "right-control" });
    smallText(slide, ctx, head, 818, y + 22, 190, 20, C.ink, 20, true);
    smallText(slide, ctx, body, 818, y + 58, 198, 20, C.muted, 14);
    line(slide, ctx, 748, y + 52, 46, C.brass, 2);
  });
  line(slide, ctx, 723, 126, 2, "#F0E6DA", 410, "spine-center");

  footer(slide, ctx, true);
  return slide;
}
