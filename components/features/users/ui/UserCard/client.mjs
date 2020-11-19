/**
 * testing the Script tag
 */
const cards = document.querySelectorAll(".UserCard");
console.log("--- testing client-side js ---");
for (const card of cards) {
  console.log(`User ${card.id.split("-")[1]}`);
}
