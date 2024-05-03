export function capitalize(city: string) {
  if (city === "all") {
    return "All Events";
  } else {
    return `Events in ${decodeURIComponent(city)
      .replace(/-/g, " ")
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")}`;
  }
}
