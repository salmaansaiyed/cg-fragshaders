#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;

out vec4 FragColor;

void main() {
    FragColor = texture(image, texcoord);
    // Luminance is calculated as L = 0.299 * Red + 0.587 * Green + 0.114 * Blue
    float L = 0.299 * FragColor.r + 0.587 * FragColor.g + 0.114 * FragColor.b;
    // Black and white images are created by assigning the luminance value to all 3 color components
    FragColor = vec4(L, L, L, 1);
}
