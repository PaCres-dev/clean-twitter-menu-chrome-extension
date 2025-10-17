const deleteSidebarUselessItems = () => {
  const twitterSidebar = document.querySelector("nav[aria-label='Primary'][role='navigation']");

  if (!twitterSidebar) {
    console.log("No sidebar found");
    return;
  }

  const sidebarItemsToRemove = [
    "Grok",
    "Jobs",
    "Communities",
    "Business",
    "Premium",
    "Verified Orgs",
  ];

  const sidebarItems = Array.from(twitterSidebar.children);

  for (const sidebarItem of sidebarItems) {
    const matchingItem = Array.from(sidebarItem.querySelectorAll("*")).find((descendant) => {
      const text = descendant.textContent?.trim().toLowerCase();
      return sidebarItemsToRemove.some((word) => text.includes(word.toLowerCase()));
    });

    if (matchingItem) {
      console.log(`Deleted: ${sidebarItem.textContent}`);
      sidebarItem.remove();
    }
  }
};

const deletePremiumAds = () => {
  const premiumAds = document.querySelectorAll("[aria-label='Subscribe to Premium']");

  premiumAds.forEach((ad) => {
    console.log(`Deleted: Premium ad`);
    ad.parentNode.remove();
  });
};

const deleteGrokButton = () => {
  const grokButtons = document.querySelectorAll("[data-testid='GrokDrawer']");

  grokButtons.forEach((grokButton) => {
    console.log(`Deleted: Grok button`);
    grokButton.parentNode.remove();
  });
};

function removeSidebarItems() {
  console.log("Removing sidebar items");

  setTimeout(() => {
    deleteSidebarUselessItems();
    deletePremiumAds();
    deleteGrokButton();
  }, 1000);
}

removeSidebarItems();
