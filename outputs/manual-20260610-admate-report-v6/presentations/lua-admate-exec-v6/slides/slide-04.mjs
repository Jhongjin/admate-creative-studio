import { C, addBackground, footer, label, line, paper, smallText, subcopy, title } from "./shared.mjs";

export async function slide04(presentation, ctx) {
  const slide = presentation.slides.add();
  addBackground(slide, ctx, "paper");
  title(slide, ctx, "다섯 서비스의 역할은\n분명합니다.");
  subcopy(
    slide,
    ctx,
    "Compass는 기준을 찾고, Sentinel은 위험 신호를 봅니다.\nLens는 증빙을 남기고, Foresight는 다음 판단의 관점을 잡습니다.",
  );

  paper(slide, ctx, 560, 94, 510, 500, { name: "operating-file", fill: C.soft });
  ctx.addShape(slide, { x: 560, y: 94, w: 72, h: 500, fill: C.ink, line: ctx.line(C.ink, 0), name: "file-spine" });
  smallText(slide, ctx, "운영\n파일", 584, 178, 44, 76, C.soft, 18, true);

  const rows = [
    ["Compass", "기준 발췌", C.teal],
    ["Sentinel", "위험 신호", C.rust],
    ["Lens", "증빙 자리", C.brass],
    ["Foresight", "다음 관점", C.teal],
    ["Agent Core", "실행 기록", C.ink],
  ];
  rows.forEach(([name, body, color], i) => {
    const y = 134 + i * 82;
    ctx.addShape(slide, { x: 632, y, w: 18, h: 50, fill: color, line: ctx.line(color, 0), name: "tab-accent" });
    smallText(slide, ctx, name, 670, y - 2, 150, 22, C.ink, 22, true);
    smallText(slide, ctx, body, 670, y + 31, 210, 22, C.muted, 16);
    line(slide, ctx, 902, y + 12, 112, color, 2);
    line(slide, ctx, 902, y + 39, 78, C.line, 1);
  });
  label(slide, ctx, "역할은 나누고, 흐름은 연결", 690, 540, 236, C.brass);

  footer(slide, ctx);
  return slide;
}
