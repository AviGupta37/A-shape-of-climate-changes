# A-shape-of-climate-change
 🌍 CO₂ Visualization — p5.js Interactive Animation

This project is an interactive **CO₂ concentration visualizer** built using **p5.js**.  
It loads real CO₂ atmospheric data from a CSV file and animates the rise in CO₂ levels across time using expanding color-coded circles.

---

## 🎯 Purpose of the Project  
### 🌐 Science Communication through Visual Communication

Modern climate science involves huge datasets that are often difficult for the general public to interpret.  
This project bridges that gap by:

- Turning raw CO₂ data into **visual patterns**
- Using **color psychology** (blue → red) to show increasing danger  
- Using **growing circles** to represent rising CO₂ levels  
- Allowing users to **control**, **scrub**, and **explore** the data  
- Making the climate message **interactive**, not passive  

The final outcome aligns with the principles of **science communication**:
- Make science accessible  
- Use visuals to reduce cognitive load  
- Highlight patterns and trends clearly  
- Encourage users to interact, explore, and reflect  

---

## 🌟 How This Project Helps

### 1️⃣ Helps People Understand Climate Change Quickly  
Most people don’t read scientific papers or long climate reports.  
This visualization turns CO₂ data into **simple colors and shapes**, allowing anyone — even without science background — to immediately understand:

- CO₂ is rising  
- It becomes dangerous over time  
- The color shift from blue → red communicates risk instantly  

This reduces the learning barrier and makes climate science accessible.

---

### 2️⃣ Converts Complex Data Into Visual Storytelling  
The project uses principles of **visual communication** such as color psychology, motion, scale, and contrast.  
This helps communicate trends that numbers alone cannot show.

Instead of seeing:

1980 = 338 ppm
1990 = 354 ppm
2000 = 370 ppm
2020 = 415 ppm

## ⭐ Features

### 📈 Dynamic CO₂ Animation
- Visualizes normalized CO₂ values as growing circles.
- Color shifts from **blue → red** indicating low to high CO₂.

### 🎛️ Interactive Controls
- **Play/Pause**
- **Animation speed slider**
- **Jump to a specific year**
- **Year scrubbing slider**
- **Keyboard shortcuts**
  - **Spacebar** → Play/Pause
  - **R** → Reset animation

### 📝 CSV Data Requirements
Your dataset must be inside:


Required headers:

| Column | Description |
|--------|-------------|
| `Yr` | Year value |
| `Mn` | Month value|
| `co2` | CO₂ concentration (ppm) |
| `co2_normalize` | Normalized 0–1 value |

---

## 📂 Project Structure
project-folder/
│
├── index.html
├── sketch_co2.js
│
└── data/
└── co2_dataset.csv


---

## 🚀 How to Run Locally

### ✔️ Method 1 — Using Live Server (VS Code)
1. Install **Live Server** extension  
2. Right-click `index.html`  
3. Select **Open with Live Server**

### ✔️ Method 2 — Using Python HTTP Server
Run in terminal: 

python -m http.server 8010

Open in browser:

http://localhost:8010


⚠️ *Do not open index.html directly — CSV loading will fail due to browser security.*

---

## 🎮 Controls Summary

| Control | Action |
|--------|--------|
| **Spacebar** | Play/Pause animation |
| **R** | Reset animation |
| Speed Slider | Adjust years per frame |
| Year Slider | Scrub through years |
| Go-To-Year | Jump to specific year |

---

## 🛠️ Technologies Used
- p5.js  
- JavaScript  
- HTML/CSS  
- CSV Data Loading  

---

## 📌 Notes
- Works best with yearly CO₂ datasets.
- Easily customizable (colors, radius mapping, thresholds) in `sketch_co2.js`.

---

