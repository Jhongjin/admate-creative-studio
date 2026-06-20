import { C, addBackground, footer, label, line, paper, pill, smallText, subcopy, title } from "./shared.mjs";

export async function slide03(presentation, ctx) {
  const slide = presentation.slides.add();
  addBackground(slide, ctx, "paper");
  title(slide, ctx, "AdMate가 먼저\n정리합니다.");
  subcopy(
    slide,
    ctx,
    "운영자는 처음부터 모든 조건을 다시 뒤지지 않아도 됩니다.\nAdMate가 기준, 리스크, 증빙 후보를 먼저 모읍니다.",
  );

  paper(slide, ctx, 650, 102, 440, 420, { name: "packet-back", fill: "#F6E8D7" });
  paper(slide, ctx, 618, 132, 440, 420, { name: "packet-mid", fill: "#FFF6E8" });
  paper(slide, ctx, 586, 164, 440, 420, { name: "packet-front", fill: C.soft });

  label(slide, ctx, "사전 검토 묶음", 620, 194, 154, C.teal);
  const items = [
    ["기준 후보", "먼저 봐야 할 기준을 꺼냅니다."],
    ["리스크 후보", "주의할 신호를 먼저 표시합니다."],
    ["수집할 증빙", "나중에 확인할 자료를 모읍니다."],
  ];
  items.forEach(([head, body], i) => {
    const y = 262 + i * 76;
    line(slide, ctx, 620, y - 18, 342, C.line, 1);
    smallText(slide, ctx, head, 620, y, 220, 24, C.ink, 23, true);
    smallText(slide, ctx, body, 620, y + 34, 310, 22, C.muted, 17);
  });
  pill(slide, ctx, "사람이 검토하기 전 단계", 720, 500, 230, C.rust, "#FAE6DC");

  footer(slide, ctx);
  return slide;
}
