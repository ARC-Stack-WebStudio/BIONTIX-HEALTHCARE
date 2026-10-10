// Add or edit product information in this list.
const products = [
  { id: 1, name: "Air Handling Unit", image: "./assest/Products/Air Handling Unit.png", shortDescription: "Advanced air handling systems designed for controlled environments and critical healthcare spaces.", description: "BIONTIX Air Handling Units are designed to support controlled environments and critical healthcare spaces. Contact our team to discuss the requirements for your facility.", features: [], applications: [] },
  { id: 2, name: "Condensing Unit", image: "./assest/Products/Condensing unit.jpeg", shortDescription: "Reliable cooling solutions designed to support efficient temperature control across healthcare facilities.", description: "BIONTIX Condensing Units support temperature control across healthcare facilities. Contact our team to discuss the requirements for your facility.", features: [], applications: [] },
  { id: 3, name: "Laminar Air Flow System", image: "./assest/Products/Laminar Air Flow System.JPG", shortDescription: "Controlled airflow and filtration systems designed for sterile and contamination-sensitive environments.", description: "BIONTIX Laminar Air Flow Systems support sterile and contamination-sensitive environments. Contact our team to discuss the requirements for your facility.", features: [], applications: [] },
  { id: 4, name: "PPGI Sheet Metal Ducting", image: "./assest/Products/ducting 2.jpg", shortDescription: "Durable ducting systems engineered for efficient air distribution and dependable facility performance.", description: "BIONTIX PPGI Sheet Metal Ducting is designed for air distribution in healthcare facilities. Contact our team to discuss your project.", features: [], applications: [] },
  { id: 5, name: "PPGI PUFF Wall & Ceiling Panel", image: "./assest//Products/PUR-Panels.jpg", shortDescription: "Insulated modular panels providing clean, durable and controlled surfaces for healthcare environments.", description: "BIONTIX PPGI PUFF Wall and Ceiling Panels provide modular surfaces for healthcare environments. Contact our team to discuss your project.", features: [], applications: [] },
  { id: 6, name: "Vinyl Antistatic & Conductive Flooring", image: "./assest/Products/Vinyl Flooring.jpg", shortDescription: "Specialized healthcare flooring designed for hygiene, durability and controlled electrical performance.", description: "BIONTIX Vinyl Antistatic and Conductive Flooring is designed for healthcare environments. Contact our team to discuss your project requirements.", features: [], applications: [] },
  { id: 7, name: "Hermetically Sealed OT Doors", image: "./assest/Products/DOOR 2.jpg", shortDescription: "Precision-sealed operating theatre doors designed for hygiene, controlled pressure and smooth access.", description: "BIONTIX Hermetically Sealed OT Doors are designed for operating theatre environments. Contact our team to discuss your facility requirements.", features: [], applications: [] },
  { id: 8, name: "Surgeon Control Panel", image: "./assest/Products/Surgeon Panel 4.jpg", shortDescription: "Integrated control interfaces designed to provide convenient management of essential OT functions.", description: "BIONTIX Surgeon Control Panels provide an integrated interface for operating theatre functions. Contact our team to discuss your project.", features: [], applications: [] },
  { id: 9, name: "OT Room LED Peripheral Light", image: "./assest/Products/Room light 3.webp", shortDescription: "Efficient LED lighting solutions designed to provide clear and comfortable illumination inside operating theatres.", description: "BIONTIX OT Room LED Peripheral Lights are designed for operating theatre illumination. Contact our team to discuss your requirements.", features: [], applications: [] },
  { id: 10, name: "LED X-Ray Viewing Screen", image: "./assest/Products/X ray img 2.jpg", shortDescription: "Bright and efficient viewing systems designed for clear examination of radiographic images.", description: "BIONTIX LED X-Ray Viewing Screens are designed for viewing radiographic images. Contact our team to discuss your requirements.", features: [], applications: [] },
  { id: 11, name: "Anaesthesia & Surgeon Pendant", image: "./assest/Products/Anesthesia & Suregon Pendant.jpeg", shortDescription: "Flexible ceiling-mounted pendant systems for organized access to medical gases, utilities and equipment.", description: "BIONTIX Anaesthesia and Surgeon Pendants support organized access to utilities and equipment. Contact our team to discuss your facility requirements.", features: [], applications: [] },
  { id: 12, name: "Static Pass Box", image: "./assest/Products/pass box 2.jpg", shortDescription: "Controlled transfer units designed to support material movement while maintaining cleanroom conditions.", description: "BIONTIX Static Pass Boxes support material transfer in cleanroom environments. Contact our team to discuss your requirements.", features: [], applications: [] },
  { id: 13, name: "Scrub Sink", image: "./assest/Products/Scrub Sink 1.jpeg", shortDescription: "Hygienic surgical scrub stations designed for efficient hand preparation in operating environments.", description: "BIONTIX Scrub Sinks are designed for hand preparation in operating environments. Contact our team to discuss your facility requirements.", features: [], applications: [] },
  { id: 14, name: "Manual & Automation", image: "https://image.made-in-china.com/202f0j00HMyehFjWGRbm/Advanced-Modular-Operating-Room-Suite.webp", shortDescription: "Integrated manual and automated solutions designed to improve operational control and facility efficiency.", description: "BIONTIX manual and automation solutions support operational control in healthcare facilities. Contact our team to discuss your project.", features: [], applications: [] }
];

// Get product ID from the URL and find the matching product.
const params = new URLSearchParams(window.location.search);
const productId = Number(params.get("id"));
const product = products.find(item => item.id === productId);

if (product) {
  document.title = `BIONTIX Healthcare | ${product.name}`;
  document.querySelector('meta[name="description"]').setAttribute("content", product.shortDescription);
  document.getElementById("breadcrumbName").textContent = product.name;
  document.getElementById("productName").textContent = product.name;
  document.getElementById("shortDescription").textContent = product.shortDescription;
  document.getElementById("description").textContent = product.description;
  const productImage = document.getElementById("productImage");
  productImage.src = product.image;
  productImage.alt = product.name;
  document.getElementById("selectedProduct").textContent = product.name;
  document.getElementById("inquiryProduct").value = product.name;

  if (product.features && product.features.length) {
    document.getElementById("featuresSection").hidden = false;
    product.features.forEach(feature => {
      const item = document.createElement("li");
      item.textContent = feature;
      document.getElementById("featuresList").appendChild(item);
    });
  }
  if (product.applications && product.applications.length) {
    document.getElementById("applicationsSection").hidden = false;
    product.applications.forEach(application => {
      const item = document.createElement("li");
      item.textContent = application;
      document.getElementById("applicationsList").appendChild(item);
    });
  }

  // This demo form validates fields but does not submit to a server.
  const form = document.getElementById("productInquiryForm");
  form.addEventListener("submit", event => {
    event.preventDefault();
    const status = document.getElementById("inquiryStatus");
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    status.textContent = `Thank you. Your enquiry about ${product.name} is ready to connect to an enquiry service.`;
    status.classList.add("success");
    form.reset();
    document.getElementById("inquiryProduct").value = product.name;
  });
} else {
  document.getElementById("productContent").hidden = true;
  document.getElementById("notFound").hidden = false;
  document.title = "BIONTIX Healthcare | Product Not Found";
}

document.getElementById("year").textContent = new Date().getFullYear();
const nav = document.querySelector(".navbar");
const updateNav = () => nav.classList.toggle("scrolled", window.scrollY > 8);
updateNav();
window.addEventListener("scroll", updateNav, { passive: true });
