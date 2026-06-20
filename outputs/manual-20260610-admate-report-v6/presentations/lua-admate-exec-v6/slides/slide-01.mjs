import { C, addBackground, footer, label, line, paper, pill, smallText, subcopy, title } from "./shared.mjs";

export async function slide01(presentation, ctx) {
  const slide = presentation.slides.add();
  addBackground(slide, ctx, "dark");

  title(slide, ctx, "오늘 보고의 핵심은\n속도가 아닙니다.", 72, 74, 520, true);
  subcopy(
    slide,
    ctx,
    "AdMate는 반복 확인을 줄이고, 중요한 근거를 남기는 광고 운영 방식입니다.\n이번 파일럿은 그 흐름이 실제 업무에 맞는지 확인하는 단계입니다.",
    72,
    226,
    540,
    true,
  );

  paper(slide, ctx, 662, 82, 468, 480, { fill: "#FFF9EF", line: "#E2D6C6", name: "executive-dossier" });
  paper(slide, ctx, 708, 126, 468, 480, { fill: "#F4EDE1", line: "#D6C8B7", name: "dossier-back" });
  label(slide, ctx, "PILOT DECISION", 740, 154, 164, C.brass);
  smallText(slide, ctx, "AdMate", 742, 206, 160, 28, C.ink, 18, true);
  smallText(slide, ctx, "Executive operating brief", 742, 234, 250, 24, C.muted, 15);
  line(slide, ctx, 742, 284, 360, C.line, 2);

  const rows = [
    ["01", "반복 확인 축소"],
    ["02", "승인 이유 보존"],
    ["03", "기준 재사용"],
  ];
  rows.forEach(([num, text], i) => {
    const y = 330 + i * 62;
    ctx.addShape(slide, { x: 742, y, w: 36, h: 36, fill: "#E7F2EE", line: ctx.line(C.teal, 1), name: "dossier-index" });
    smallText(slide, ctx, num, 753, y + 8, 22, 16, C.teal, 13, true);
    smallText(slide, ctx, text, 798, y + 6, 220, 24, C.ink, 21, true);
    line(slide, ctx, 798, y + 40, 260, C.line, 1);
  });
  pill(slide, ctx, "보고 기준: 업무 적용 가능성", 742, 510, 240, C.rust, "#F8E7DE");

  footer(slide, ctx, true);
  return slide;
}
