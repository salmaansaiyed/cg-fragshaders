#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;

out vec4 FragColor;

void main() {
    // scale and translate the texture coordinate such that it is in the range [-1.0, 1.0]
    // multiply by 2, then subtract 1
    vec2 newtexcoord = texcoord * 2 - 1;
    
    // calculate 𝜽 = arctan(texture_coordinate_y, texture_coordinate_x)
    float theta = atan(newtexcoord.y, newtexcoord.x);
    
    // calculate radius = magnitude of texture coordinate, raised to the power of 1.5
    float radius = pow(length(newtexcoord), 1.5);
    
    // calculate final texture coordinate = (radius * cos(𝜽),  radius * sin(𝜽))
    texcoord.x = radius * cos(theta);
    texcoord.y = radius * sin(theta);
    
    FragColor = texture(image, texcoord);
}
