# AdMate Live Demo Runbook Index

Updated: 2026-06-28

Purpose: Commander handoff index for running AdMate platform demos on deployed screens after login. This is not a local setup guide. Use it to find the product-specific runbook, safe fixture, recommended capture, and stop conditions.

## 1. Demo Package Status

| Area | Owner repo | Status | Primary runbook | Fixture / safe input |
| --- | --- | --- | --- | --- |
| Compass | `admate-compass` | Ready | `D:\Projects\AdMate\admate-compass\outputs\admate-presentation-v2\compass-live-demo-runbook.md` | Questions inside runbook |
| Sentinel Monitoring | `admate-agent-core` | Ready | `D:\Projects\AdMate\admate-agent-core\outputs\admate-presentation-v2\sentinel-monitoring-live-demo-runbook.md` | `D:\Projects\AdMate\admate-agent-core\outputs\admate-presentation-v2\test-fixtures\sentinel-monitoring-demo-alerts.json` |
| Sentinel Media Mix / Prelaunch | `admate-agent-core` | Ready | `D:\Projects\AdMate\admate-agent-core\outputs\admate-presentation-v2\sentinel-prelaunch-live-demo-runbook.md` | `D:\Projects\AdMate\admate-agent-core\outputs\admate-presentation-v2\test-fixtures\sentinel-prelaunch-demo-mediamix.tsv` |
| Lens | `admate-lens` | Ready | `D:\Projects\AdMate\admate-lens\outputs\admate-presentation-v2\lens-live-demo-runbook.md` | `D:\Projects\AdMate\admate-lens\outputs\admate-presentation-v2\test-fixtures\lens-demo-capture-inputs.json` |
| Foresight | `admate-foresight` | Ready after Commander correction | `D:\Projects\AdMate\admate-foresight\outputs\admate-presentation-v2\foresight-live-demo-runbook.md` | `D:\Projects\AdMate\admate-foresight\outputs\admate-presentation-v2\test-fixtures\foresight-demo-scenarios.json` |
| Hermes | `admate-agent-core` | Ready | `D:\Projects\AdMate\admate-agent-core\outputs\admate-presentation-v2\hermes-live-demo-runbook.md` | `D:\Projects\AdMate\admate-agent-core\outputs\admate-presentation-v2\test-fixtures\hermes-demo-knowledge-candidates.json` |
| Openclaw / Slack Ops | `admate-agent-core` | Ready | `D:\Projects\AdMate\admate-agent-core\outputs\admate-presentation-v2\openclaw-live-demo-runbook.md` | `D:\Projects\AdMate\admate-agent-core\outputs\admate-presentation-v2\test-fixtures\openclaw-demo-operator-actions.json` |

## 2. Main Presentation Screens

| Slide | Product | Main visual asset | Purpose |
| --- | --- | --- | --- |
| 6 | Compass | `compass-desk-naver-shopping-search-sources-main.png` | Show source-cited answer quality |
| 6 | Sentinel Monitoring | `sentinel-monitoring-dashboard-main-anonymized.png` | Show action-required risk signal |
| 7 | Lens | `lens-main-demandgen-youtube-feed.png` | Show synthetic evidence card |
| 7 | Foresight | `foresight-slide7-forecast-kpi-reach-anonymized.png` | Show forecast / benchmark KPI card |
| 8 | Agent Core / Hermes | Native governance diagram based on `agent-core-hermes-governance-diagram_v2.png` | Show approval, audit, and learning candidate loop |

Appendix candidates:

- `compass-desk-kakao-bizboard-source-drawer-appendix.png`
- `sentinel-monitoring-alert-drawer-appendix-anonymized.png`
- `sentinel-prelaunch-meta-mediamix-comparison-card_appendix_v2_masked.png`
- `sentinel-prelaunch-google-ads-comparison-card_appendix_v2_masked.png`
- `lens-ui-review-panel-cropped.png`
- `lens-appendix-youtube-shorts.png`
- `lens-appendix-gdn-pc-display.png`
- `lens-appendix-naver-smart-channel.png`
- `lens-appendix-kakao-bizboard.png`
- `foresight-appendix-prediction-basis-panel-anonymized.png`
- `hermes-knowledge-proposal-approved-demo_v2.png`
- `openclaw-slack-operator-action-appendix_masked_v2.png`

## 3. Demo Order

Use this sequence if the executive demo needs a compact live walkthrough.

1. **Compass**: ask one safe policy/product question and show `[S]` source citations.
2. **Sentinel Monitoring**: open the monitoring dashboard and show a read-only alert/action-required state.
3. **Sentinel Prelaunch**: upload or paste the demo media-mix fixture and show Meta/Google comparison cards.
4. **Lens**: create or open one synthetic capture result and show evidence-card quality.
5. **Foresight**: run the home simulator with safe demo inputs and show forecast KPI plus basis panel.
6. **Openclaw / Hermes**: show action candidate, audit trail, Slack/Ops evidence, and approved-knowledge boundary.

## 4. Stop Conditions

Stop the demo immediately if any screen reveals:

- Real advertiser name
- Real campaign name
- Real media account ID or campaign ID
- Real budget, spend, contract rate, or performance number
- Email address, user identifier, phone number, or personal data
- Token, API key, cookie, session value, webhook URL, secret, or credential
- Browser developer tool payload, header, cookie, storage, or environment value

## 5. Commander Checks Before Live Use

| Check | Owner | Status |
| --- | --- | --- |
| Confirm each production/preview URL | Commander | 확인 필요 |
| Confirm demo/anonymized login accounts | Commander | 확인 필요 |
| Confirm Foresight numeric demo values can remain visible or need blur/range masking | Commander + Design Director | 확인 필요 |
| Confirm Slack/Ops evidence remains masked and appendix-only | Commander + Agent Core | 확인 필요 |
| Confirm no restricted real case enters the main deck | Commander | Required |

## 6. Delivery Package Link

The current local executive-review deck package is here:

`D:\Projects\AdMate\admate-creative-studio\outputs\admate-presentation-v2\delivery`

Use:

- `admate-presentation-v2-draft.pptx`
- `admate-presentation-v2-contact-sheet.png`
- `admate-presentation-v2-deck-build-notes.md`
- `admate-presentation-v2-asset-manifest.json`

The delivery package is for review. Final PPTX/Google Slides use still needs Commander approval after the live-demo checks above.
