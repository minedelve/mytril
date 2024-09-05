

export function copyToClipboard(value: string) {
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(value).then(function() {
            console.log("Copy: " + value);
        }).catch(function(err) {
            console.error("Error copying to clipboard: ", err);
        });
    } else {
        // Fallback (legacy browser)
        const zoneTexte = document.createElement("textarea");
        zoneTexte.value = value;
        zoneTexte.style.position = "fixed";
        zoneTexte.style.left = "-9999px";
        document.body.appendChild(zoneTexte);
        zoneTexte.focus();
        zoneTexte.select();
        
        try {
            document.execCommand('copy');
            console.log("Copy: " + value);
        } catch (err) {
            console.error("Error copying to clipboard: ", err);
        }

        document.body.removeChild(zoneTexte);
    }
}
