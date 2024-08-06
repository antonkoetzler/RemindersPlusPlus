export default function suppressWarnings() {
  console.warn = (message, ...args) => {
    // Stupid warning whenever importing any custom font
    if (message.includes('fontFamily "Ubuntu_700Bold" is not a system font')) {
      return;
    }
    console.warn(message, ...args);
  };
}
