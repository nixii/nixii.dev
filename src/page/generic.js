
function weight(component) {
    return `${component.weight ? `flex: ${component.weight};` : ""}`;
}

function height(component) {
    return `${component.height ? `height: ${component.height};` : ""}`;
}

function all(component) {
    let body = " style=\"";

    body += weight(component);
    body += height(component);

    return body + "\"";
}

module.exports = {
    weight: weight,
    height: height,
    all: all
}