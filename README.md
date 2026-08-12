# CGK Handling PWA — fixed schedule logic

Important schedule rule:
- Departure handling = actual first flight departing CGK, using its departure date/time.
- Return/arrival handling = actual final scheduled flight arriving at CGK, using its arrival date/time.
- If the PDF marks (+1), the arrival date is the following calendar day.
- Arrival cards show the handling time on the RIGHT.
- Duplicate package rows on the same flight/date are consolidated into one handling event; verified pax is summed and PNRs are retained for search.

Example from the source:
10AUG CGKDOH 1830 2240 QR957
11AUG DOHJED 0050 0320 QR1184
17AUG JEDDOH 2235 0055 (+1) QR1189
18AUG DOHCGK 0235 1535 QR956

The app therefore shows the return handling on 18 August at 15:35 for QR956.
