// Add your About Me text here
const aboutText = `Yo, it's Piranavakumar, the visionary genius breaking boundaries in the tech game. I'm a certified AWS Solutions Architect, merging software engineering and data science like none other. From the depths of academia to the heights of industry, I bring a unique perspective that's light years ahead.

I'm all about that data flow, my friend. As a Data Engineer at the Racial Data Lab, I crafted mind-blowing ETL pipelines using AWS Glue and PySpark. I sliced through massive datasets, uncovering the truth behind vaccine distribution disparities and exposing sentencing trends like a modern-day oracle.

But that's just the tip of the iceberg. Picture this: Falcon 3D, my brainchild. I birthed stunning websites with HTML, CSS, and JavaScript, infusing them with captivating animations that'll make your mind explode. Oh, and let's not forget the AWS migration, taking our web development to the cloud, where scalability and predictive analytics reign supreme.

Projects? Oh, I got some bangers for you. Check out my REST API for the wordle game, built on the raw power of AWS services. And my deep learning models? They diagnose lung diseases from X-ray images with precision. VGG 16, ResNet, DenseNet, and EfficientNet—all in my arsenal, delivering mind-blowing accuracy of 87% with the EfficientNet model.

I'm not just a techie, though. I'm an artist, constantly evolving and pushing the boundaries of what's possible. Agile? That's my middle name. I thrive in dynamic environments, collaborating with the best minds to create something truly extraordinary. So let's connect and make history together. Kanye West said it best: "Creativity is my drug, and I'm addicted to it."`;

// Typewriting effect function
function typeWriter(text, element, delay) {
  let charIndex = 0;
  const interval = setInterval(() => {
    element.textContent += text[charIndex];
    charIndex++;
    if (charIndex === text.length) {
      clearInterval(interval);
    }
  }, delay);
}

// Get the command element and start the typewriting effect
const commandElement = document.getElementById("about-command");
typeWriter(aboutText, commandElement, 50);
