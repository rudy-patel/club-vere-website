# After Dark Hero Density Design

## Goal

Make the After Dark opening feel intentional and full without adding more copy or changing the rest of the design system.

## Approved direction

Replace the current image-led hero with a poster-like masthead:

- Use an oversized `CLUB VERE` lockup as the left-hand anchor.
- Move `A reason to leave the group chat.` into the hero as the primary message.
- Place the existing four event formats in a compact two-column grid beneath the message.
- Keep one short supporting sentence and the existing Instagram call to action.
- Remove the original lower formats section so the content appears only once.
- Let the past-event block follow the manifesto as it does today.

## Layout

Desktop uses a two-column hero. The brand masthead occupies the narrower left column and the message, supporting copy, call to action, and format grid fill the right column. Hairline rules and the existing pink and acid accents create density without adding card containers.

Below 768px, the hero becomes one column. The wordmark stays prominent but scales down, the supporting row stacks, and the format grid remains two columns until the narrowest breakpoint, where it becomes one column.

## Preservation constraints

- Change only the After Dark component and its selectors.
- Preserve its dark palette, condensed typography, sharp corners, navigation, ticker, manifesto, event, community, final call to action, and footer.
- Preserve the `#top`, `#manifesto`, and `#past-event` anchors.
- Reuse the existing shared content and links.
- Add no dependencies and no new runtime behavior.

## Verification

- A focused rendering test proves the new hero contains the brand, formats title, all four formats, and call to action.
- The test proves the former standalone formats section is gone.
- Verify the hero at desktop, tablet, and mobile widths.
- Run the full test, lint, and production build commands.
