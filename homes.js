function redirectTo(encryptionType) {
    // Placeholder: Replace with actual URLs for each encryption method
    const urls = {
        rsa: "rsa-encryption.html",
        quantum: "quantum-encryption.html",
        aes: "aes-encryption.html",
        des: "des-encryption.html",
        caesar: "caesar-cipher.html",
        hill: "hill-cipher.html",
        "rail-fence": "rail-fence-cipher.html"
    };
    
    if (urls[encryptionType]) {
        window.location.href = urls[encryptionType];
    } else {
        alert("Encryption page not found.");
    }
}
