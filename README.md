# CGK Handling v20

Applied root-cause modal lifecycle fix from the supplied debugging specification.

Key changes:
- Single `modalManager` controls Import Schedule and Add/Edit Schedule modals.
- One cleanup path for X, Cancel, Save, Import completion, Escape, and backdrop close.
- Hidden modals/backdrops use `hidden`, `visibility`, `display:none`, `pointer-events:none`, and `inert` to prevent invisible click-blocking layers.
- Body/document overflow and touch state are restored on every close.
- Removed duplicate modal click/capture bindings and legacy hard-wire handlers.
- Added a single stable import submit listener.
- Existing scheduling, parsing, editing, import, export, print, dark mode, responsive UI, and PWA assets are retained.

The flight parsing rule remains unchanged: a CGK arrival uses the arrival time in the final `...CGK` segment, including `(+1)` date rollover.
