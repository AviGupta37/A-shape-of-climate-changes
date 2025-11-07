let table;
let currentYear = 0;
let numRows;
let centerX, centerY;

function preload() {
  table = loadTable('data/co2_dataset.csv', 'csv', 'header');
}

function setup() {
  createCanvas(700, 700);
  background(0);
  colorMode(HSB, 360, 100, 100, 100);
  noStroke();
  numRows = table.getRowCount();
  centerX = width / 2;
  centerY = height / 2;
  textSize(18);
  fill(255);
  textAlign(CENTER, CENTER);
}

// Animate year by year
function draw() {
  if (currentYear < numRows) {
    let co2_norm = table.getNum(currentYear, 'co2_normalize');
    let radius = map(co2_norm, 0, 1, 50, 320);
    let col = map(co2_norm, 0, 1, 210, 0); // blue to red
    fill(col, 70, 100, 40); // slightly transparent
    ellipse(centerX, centerY, radius * 2, radius * 2);

    // Show current year and value
    let yr = table.getString(currentYear, 'Yr');
    let co2 = table.getString(currentYear, 'co2');
    // Draw year above the center
    fill(255);
    text("Year: " + yr + "  CO₂: " + co2 + " ppm", centerX, 50);

    currentYear++;
  } else {
    // When done, display legend and stop animation
    noLoop();
    fill(255);
    text("Blue: Low CO₂  |  Red: High CO₂", centerX, height - 30);
  }
}
