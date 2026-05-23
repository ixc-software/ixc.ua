#!/usr/bin/env bash
# Source scans are APNG (3 frames in one file). Browsers only show frame 1 in <img>.
# Run after replacing the source file in Downloads.
set -euo pipefail
SRC="${1:-$HOME/Downloads/свидетельство на знак interexchange carrier 1.png}"
DEST="$(cd "$(dirname "$0")/.." && pwd)/public/certificates"
ffmpeg -y -i "$SRC" -frames:v 3 "$DEST/trademark-interexchange-carrier-%d.png"
echo "Extracted 3 static PNG frames to $DEST"
