export function detectFileType(byte) {
    const buffer = new Uint8Array(byte)
    if (buffer.length < 4) {
        return "Unknown";
    }

    if (buffer[0] === 0x25 &&
        buffer[1] === 0x50 &&
        buffer[2] === 0x44 &&
        buffer[3] === 0x46
    ) {
        return "PDF";
    }

    if (buffer[0] === 0x50 &&
        buffer[1] === 0x4B
    ) {
        return "ZIP";
    }
    //0x47, 0x49, 0x46, 0x38
    if (buffer[0] === 0x47 &&
        buffer[1] === 0x49 &&
        buffer[2] === 0x46 &&
        buffer[3] === 0x38
    ) {
        return "GIF";
    }
    //0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a,
    if (buffer[0] === 0x89 &&
        buffer[1] === 0x50 &&
        buffer[2] === 0x4e &&
        buffer[3] === 0x47 &&
        buffer[4] === 0x0d &&
        buffer[5] === 0x0a &&
        buffer[6] === 0x1a &&
        buffer[7] === 0x0a 
    ) {
        return "PNG";
    }

    return "UNKNOWN";
}
