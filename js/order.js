(function () {
  "use strict";

  const basePrice = 125;

  const steps = [
    { id: "base", label: "主食", title: "選主食", hint: "可選 1 ～ 2 種", max: 2, min: 1 },
    { id: "protein", label: "蛋白質", title: "選蛋白質", hint: "最多選 2 種", max: 2, min: 1 },
    { id: "topping", label: "蔬果配料", title: "選蔬果配料", hint: "最多選 5 種", max: 5, min: 0 },
    { id: "sauce", label: "醬料", title: "選醬料", hint: "最多選 1 種", max: 1, min: 0 },
    { id: "garnish", label: "點綴", title: "選點綴", hint: "最多選 1 種", max: 1, min: 0 },
    { id: "crispy", label: "脆料", title: "選脆料", hint: "最多選 1 種", max: 1, min: 0 },
    { id: "soup", label: "湯品", title: "選湯品", hint: "最多選 1 種", max: 1, min: 0 }
  ];

  const ingredients = [
    { id: "base-quinoa", group: "base", name: "藜麥白米", desc: "高纖、口感清爽", img: "images/real/base_quinoa.jpg", icon: "images/icons/base_quinoa.png", calories: 150, protein: 4, carbs: 30.5, fat: 1.2, price: 0 },
    { id: "base-germ", group: "base", name: "胚芽米", desc: "日常均衡主食", img: "images/real/base_germ.jpg", icon: "images/icons/base_germ.png", calories: 140, protein: 3.5, carbs: 28, fat: 1.5, price: 0 },
    { id: "base-pasta", group: "base", name: "天使細麵", desc: "飽足感較高", img: "images/real/base_pasta.jpg", icon: "images/icons/base_pasta.png", calories: 192, protein: 6.6, carbs: 38.4, fat: 1.2, price: 0 },
    { id: "base-lettuce", group: "base", name: "生菜", desc: "低熱量控碳首選", img: "images/real/base_lettuce.jpg", icon: "images/icons/base_lettuce.png", calories: 15, protein: 1, carbs: 2.5, fat: 0.1, price: 0 },

    { id: "protein-salmon", group: "protein", name: "挪威鮭魚", desc: "油脂香氣明顯", img: "images/real/protein_salmon.jpg", icon: "images/icons/protein_salmon.png", calories: 124.8, protein: 12.2, carbs: 0, fat: 8, price: 85 },
    { id: "protein-smoked-salmon", group: "protein", name: "煙燻鮭魚", desc: "鹹香濃郁", img: "images/real/protein_smoked_salmon.jpg", icon: "images/icons/protein_smoked_salmon.png", calories: 70.2, protein: 11, carbs: 0, fat: 2.6, price: 85 },
    { id: "protein-scallop", group: "protein", name: "炙燒干貝", desc: "海味清甜", img: "images/real/protein_scallop.jpg", icon: "images/icons/protein_scallop.png", calories: 66.6, protein: 12.3, carbs: 3.2, fat: 0.5, price: 85 },
    { id: "protein-tuna", group: "protein", name: "嫩煎鮪魚", desc: "高蛋白、低脂", img: "images/real/protein_seared_tuna.jpg", icon: "images/icons/protein_tuna.png", calories: 78, protein: 16.8, carbs: 0, fat: 0.4, price: 70 },
    { id: "protein-tempeh", group: "protein", name: "椒鹽天貝", desc: "植物蛋白與發酵香氣", img: "images/real/protein_tempeh.jpg", icon: "images/icons/protein_tempeh.png", calories: 193, protein: 19, carbs: 9.4, fat: 10.8, price: 40 },
    { id: "protein-chicken", group: "protein", name: "骰子雞", desc: "增肌友善選擇", img: "images/real/protein_chicken.jpg", icon: "images/icons/protein_chicken.png", calories: 132, protein: 24.8, carbs: 0, fat: 2.9, price: 45 },
    { id: "protein-pork", group: "protein", name: "蔥爆豬", desc: "口味濃厚、飽足感高", img: "images/real/protein_pork.jpg", icon: "images/icons/protein_pork.png", calories: 242, protein: 27, carbs: 3, fat: 14, price: 55 },
    { id: "protein-shrimp", group: "protein", name: "手撥甜蝦", desc: "清爽低脂蛋白", img: "images/real/protein_shrimp.jpg", icon: "images/icons/protein_shrimp.png", calories: 49.5, protein: 12, carbs: 0.1, fat: 0.1, price: 60 },
    { id: "protein-egg", group: "protein", name: "金鮮蛋", desc: "柔順口感", img: "images/real/protein_egg.jpg", icon: "images/icons/protein_egg.png", calories: 77.5, protein: 6.5, carbs: 0.6, fat: 5.5, price: 20 },
    { id: "protein-mexican-chicken", group: "protein", name: "墨西哥辣雞", desc: "香料風味明顯", img: "images/real/protein_mexican_chicken.jpg", icon: "images/icons/protein_mexican_chicken.png", calories: 180, protein: 25, carbs: 4, fat: 7, price: 55 },
    { id: "protein-duck", group: "protein", name: "炙燒鴨胸", desc: "風味濃郁", img: "images/real/protein_duck.jpg", icon: "images/icons/protein_duck.png", calories: 120.6, protein: 11.4, carbs: 0, fat: 8.4, price: 85 },
    { id: "protein-tofu", group: "protein", name: "豆腐", desc: "植物蛋白", img: "images/real/protein_tofu.jpg", icon: "images/icons/protein_tofu.png", calories: 40, protein: 4, carbs: 0.8, fat: 2.4, price: 20 },

    { id: "topping-tomato", group: "topping", name: "牛番茄", desc: "酸甜清爽", img: "images/real/topping_tomato.jpg", icon: "images/icons/topping_tomato.png", calories: 5.4, protein: 0.3, carbs: 1.2, fat: 0.1, price: 0 },
    { id: "topping-dragonfruit", group: "topping", name: "火龍果", desc: "色彩鮮明、清甜", img: "images/real/topping_dragonfruit.jpg", icon: "images/icons/topping_dragonfruit.png", calories: 27, protein: 0.5, carbs: 5.8, fat: 0.2, price: 0 },
    { id: "topping-chickpeas", group: "topping", name: "鷹嘴豆", desc: "提升飽足與纖維", img: "images/real/topping_chickpeas.jpg", icon: "images/icons/topping_chickpeas.png", calories: 65.6, protein: 3.6, carbs: 11, fat: 1, price: 0 },
    { id: "topping-beansprouts", group: "topping", name: "辣豆芽", desc: "清爽低負擔", img: "images/real/topping_beansprouts.jpg", icon: "images/icons/topping_beansprouts.png", calories: 30, protein: 3, carbs: 5, fat: 0.2, price: 0 },
    { id: "topping-pumpkin", group: "topping", name: "南瓜丁", desc: "自然甜味", img: "images/real/topping_pumpkin.jpg", icon: "images/icons/topping_pumpkin.png", calories: 9.1, protein: 0.3, carbs: 2.3, fat: 0, price: 0 },
    { id: "topping-sweetpotato", group: "topping", name: "地瓜泥", desc: "補碳與飽足感", img: "images/real/topping_sweetpotato.jpg", icon: "images/icons/topping_sweetpotato.png", calories: 43, protein: 0.8, carbs: 10.1, fat: 0.1, price: 0 },
    { id: "topping-kimchi", group: "topping", name: "黃金泡菜", desc: "酸辣開胃", img: "images/real/topping_kimchi.jpg", icon: "images/icons/topping_kimchi.png", calories: 45, protein: 1.5, carbs: 7, fat: 1, price: 5 },
    { id: "topping-mushroom", group: "topping", name: "油醋杏鮑菇", desc: "低卡耐吃", img: "images/real/topping_mushroom.jpg", icon: "images/icons/topping_mushroom.png", calories: 40, protein: 3.5, carbs: 5, fat: 0.5, price: 5 },
    { id: "topping-fungus", group: "topping", name: "醋香木耳", desc: "口感爽脆", img: "images/real/topping_fungus.jpg", icon: "images/icons/topping_fungus.png", calories: 25, protein: 1.2, carbs: 5.5, fat: 0.1, price: 0 },
    { id: "topping-corn", group: "topping", name: "玉米", desc: "甜味與口感", img: "images/real/topping_corn.jpg", icon: "images/icons/topping_corn.png", calories: 34.4, protein: 1.3, carbs: 7.5, fat: 0.5, price: 0 },
    { id: "topping-edamame", group: "topping", name: "毛豆", desc: "蛋白與纖維", img: "images/real/topping_edamame.jpg", icon: "images/icons/topping_edamame.png", calories: 48.4, protein: 4.8, carbs: 3.6, fat: 2.1, price: 0 },
    { id: "topping-seaweed", group: "topping", name: "海藻沙拉", desc: "清爽低脂", img: "images/real/topping_seaweedsalad.jpg", icon: "images/icons/topping_seaweedsalad.png", calories: 45, protein: 1, carbs: 8, fat: 0.5, price: 0 },
    { id: "topping-zucchini", group: "topping", name: "櫛瓜", desc: "清爽低熱量", img: "images/real/topping_zucchini.jpg", icon: "images/icons/topping_zucchini.png", calories: 6, protein: 0.4, carbs: 1.1, fat: 0.1, price: 0 },
    { id: "topping-seasonal", group: "topping", name: "季節時蔬", desc: "依季節調整", img: "images/real/topping_seasonal.jpg", icon: "images/icons/topping_seasonal.png", calories: 10, protein: 0.6, carbs: 1.8, fat: 0.1, price: 0 },
    { id: "topping-cabbage", group: "topping", name: "紫高麗", desc: "脆口增色", img: "images/real/topping_cabbage.jpg", icon: "images/icons/topping_cabbage.png", calories: 6.2, protein: 0.3, carbs: 1.5, fat: 0, price: 0 },

    { id: "sauce-classic", group: "sauce", name: "經典醬汁", desc: "安全百搭", img: "images/real/sauce_classic.jpg", icon: "images/icons/sauce_classic.png", calories: 60, protein: 1, carbs: 5, fat: 4, price: 0 },
    { id: "sauce-mustard", group: "sauce", name: "和風芥籽", desc: "甜香微酸", img: "images/real/sauce_mustard.jpg", icon: "images/icons/sauce_mustard.png", calories: 75, protein: 1, carbs: 4, fat: 6, price: 0 },
    { id: "sauce-sichuan", group: "sauce", name: "蜀香干鍋醬", desc: "麻辣厚味", img: "images/real/sauce_sichuan.jpg", icon: "images/icons/sauce_sichuan.png", calories: 85, protein: 1, carbs: 6, fat: 6.5, price: 5 },
    { id: "sauce-korean", group: "sauce", name: "韓式醬", desc: "甜辣風味", img: "images/real/sauce_korean.jpg", icon: "images/icons/sauce_korean.png", calories: 50, protein: 1.5, carbs: 10, fat: 1, price: 0 },
    { id: "sauce-vinegar", group: "sauce", name: "橘子醋", desc: "控脂清爽", img: "images/real/sauce_vinegar.jpg", icon: "images/icons/sauce_vinegar.png", calories: 35, protein: 0.5, carbs: 8, fat: 0, price: 0 },
    { id: "sauce-sesame", group: "sauce", name: "焙煎胡麻", desc: "香氣濃厚", img: "images/real/sauce_sesame.jpg", icon: "images/icons/sauce_sesame.png", calories: 110, protein: 2, carbs: 4, fat: 9.5, price: 0 },
    { id: "sauce-spicy", group: "sauce", name: "辣味美乃滋", desc: "濃郁辣味", img: "images/real/sauce_spicymayo.jpg", icon: "images/icons/sauce_spicymayo.png", calories: 130, protein: 0.5, carbs: 2, fat: 13, price: 0 },
    { id: "sauce-hawaii", group: "sauce", name: "夏威夷燒烤醬", desc: "果香低脂", img: "images/real/sauce_hawaii.jpg", icon: "images/icons/sauce_hawaii.png", calories: 45, protein: 0.5, carbs: 11, fat: 0, price: 0 },

    { id: "garnish-quinoa", group: "garnish", name: "紅藜麥", desc: "細緻脆口", img: "images/real/garnish_quinoa.jpg", icon: "images/icons/garnish_quinoa.png", calories: 25, protein: 1, carbs: 4.5, fat: 0.5, price: 0 },
    { id: "garnish-seaweed", group: "garnish", name: "海苔絲", desc: "鹹香提味", img: "images/real/garnish_seaweed.jpg", icon: "images/icons/garnish_seaweed.png", calories: 5, protein: 0.5, carbs: 0.5, fat: 0, price: 0 },
    { id: "garnish-wasabi", group: "garnish", name: "芥末", desc: "微嗆清香", img: "images/real/garnish_wasabi.jpg", icon: "images/icons/garnish_wasabi.png", calories: 10, protein: 0, carbs: 2, fat: 0, price: 0 },
    { id: "garnish-jalapeno", group: "garnish", name: "墨西哥辣椒", desc: "刺激口感", img: "images/real/garnish_jalapeno.jpg", icon: "images/icons/garnish_jalapeno.png", calories: 1.5, protein: 0.1, carbs: 0.3, fat: 0, price: 0 },

    { id: "crispy-onion", group: "crispy", name: "蔥酥", desc: "香脆口感", img: "images/real/crispy_onion.jpg", icon: "images/icons/crispy_onion.png", calories: 45, protein: 0.5, carbs: 3, fat: 3.5, price: 0 },
    { id: "crispy-garlic", group: "crispy", name: "蒜酥", desc: "香氣強烈", img: "images/real/crispy_garlic.jpg", icon: "images/icons/crispy_garlic.png", calories: 50, protein: 1, carbs: 4, fat: 3.5, price: 0 },
    { id: "crispy-cornchips", group: "crispy", name: "玉米脆片", desc: "輕脆口感", img: "images/real/crispy_cornchips.jpg", icon: "images/icons/crispy_cornchips.png", calories: 60, protein: 1, carbs: 8, fat: 3, price: 0 },
    { id: "crispy-nuts", group: "crispy", name: "堅果", desc: "好油脂與脆口", img: "images/real/crispy_nuts.jpg", icon: "images/icons/crispy_nuts.png", calories: 70, protein: 2, carbs: 2.5, fat: 6, price: 5 },

    { id: "soup-corn", group: "soup", name: "玉米濃湯", desc: "加購湯品", img: "images/real/soup_corn.jpg", icon: "images/icons/soup_corn.png", calories: 150, protein: 4, carbs: 18, fat: 7, price: 39 },
    { id: "soup-tomato", group: "soup", name: "番茄蔬菜湯", desc: "加購湯品", img: "images/real/soup_tomato.jpg", icon: "images/icons/soup_tomato.png", calories: 80, protein: 3, carbs: 12, fat: 2.5, price: 39 }
  ];

  const presets = [
    { name: "健身增肌碗", desc: "雞胸、鮪魚、毛豆與生菜，蛋白質優先。", tag: "高蛋白", img: "images/real/protein_chicken.jpg", items: ["base-lettuce", "base-quinoa", "protein-chicken", "protein-tuna", "topping-edamame", "topping-tomato", "topping-mushroom", "sauce-vinegar", "garnish-seaweed"] },
    { name: "清爽控卡碗", desc: "生菜、蝦仁、番茄與油醋醬，熱量更輕。", tag: "低卡", img: "images/real/protein_shrimp.jpg", items: ["base-lettuce", "protein-shrimp", "topping-tomato", "topping-pumpkin", "topping-seaweed", "sauce-vinegar", "garnish-wasabi"] },
    { name: "人氣鮭魚碗", desc: "鮭魚搭藜麥飯與經典醬，風味穩定。", tag: "人氣", img: "images/real/protein_salmon.jpg", items: ["base-quinoa", "protein-salmon", "topping-tomato", "topping-corn", "topping-kimchi", "sauce-classic", "crispy-onion"] },
    { name: "素食纖維碗", desc: "豆腐、毛豆、菇菇與海帶芽，清爽耐吃。", tag: "植物蛋白", img: "images/real/protein_tofu.jpg", items: ["base-germ", "protein-tofu", "topping-edamame", "topping-mushroom", "topping-seaweed", "topping-pumpkin", "sauce-hawaii", "garnish-quinoa"] }
  ];

  const selected = new Map();
  const cart = [];
  let activeStep = "base";
  let activeMode = "relaxed";
  let editingId = "";
  let toastTimer = 0;

  const byId = new Map(ingredients.map((item) => [item.id, item]));
  const stepById = new Map(steps.map((step) => [step.id, step]));

  document.addEventListener("DOMContentLoaded", init);

  function init() {
    loadCartFromStorage();
    renderTabs();
    renderPresets();
    renderIngredients();
    bindActions();
    const hasSavedBowl = localStorage.getItem("colorbowl_current_bowl");
    if (hasSavedBowl) {
      loadSelectedFromStorage();
    } else {
      applyPreset(presets[0], false);
    }
    updateAll();
    renderCart();
  }

  function bindActions() {
    document.querySelectorAll("[data-mode]").forEach((button) => {
      button.addEventListener("click", () => {
        activeMode = button.dataset.mode || "relaxed";
        document.querySelectorAll("[data-mode]").forEach((item) => item.classList.toggle("is-active", item === button));
        document.querySelector("[data-target-panel]").hidden = activeMode !== "strict";
        updateAll();
      });
    });

    document.querySelectorAll("[data-target]").forEach((input) => input.addEventListener("input", updateAll));

    document.querySelector("[data-apply-preset='fitness']")?.addEventListener("click", () => applyPreset(presets[0], true));

    document.querySelectorAll("[data-reset]").forEach((button) => {
      button.addEventListener("click", () => {
        selected.clear();
        editingId = "";
        document.querySelector("[data-note]").value = "";
        saveSelectedToStorage();
        updateAll();
        showToast("已清空目前這碗。");
      });
    });

    document.querySelector("[data-note]")?.addEventListener("input", () => {
      saveSelectedToStorage();
    });

    document.querySelectorAll("[data-add-cart]").forEach((button) => button.addEventListener("click", addToCart));
    document.querySelectorAll("[data-open-cart]").forEach((button) => button.addEventListener("click", openCart));
    document.querySelectorAll("[data-close-cart]").forEach((button) => button.addEventListener("click", closeCart));
    document.querySelector("[data-mobile-summary-toggle]")?.addEventListener("click", toggleMobileSummary);
    document.querySelector("[data-mobile-summary-close]")?.addEventListener("click", closeMobileSummary);

    // 展開/收合左側的訂單明細面板
    document.querySelectorAll("[data-toggle-cart-details]").forEach((cartToggleBtn) => {
      cartToggleBtn.addEventListener("click", () => {
        const drawer = document.querySelector("[data-cart-drawer]");
        if (drawer?.classList.contains("details-open")) {
          closeDetails();
        } else {
          openDetails();
        }
      });
    });

    // 關閉訂單明細面板的事件綁定
    document.querySelectorAll("[data-close-details]").forEach((button) => {
      button.addEventListener("click", closeDetails);
    });

    // 摺疊總營養素開關
    const toggleBtn = document.querySelector("[data-toggle-macros]");
    const macrosDiv = document.querySelector("[data-cart-total-macros]");
    if (toggleBtn && macrosDiv) {
      toggleBtn.addEventListener("click", () => {
        const isHidden = macrosDiv.hasAttribute("hidden");
        if (isHidden) {
          macrosDiv.removeAttribute("hidden");
          toggleBtn.classList.add("is-active");
        } else {
          macrosDiv.setAttribute("hidden", "");
          toggleBtn.classList.remove("is-active");
        }
      });
    }

    document.querySelector("[data-submit-order]")?.addEventListener("click", () => {
      if (!cart.length) {
        showToast("購物車還是空的，先加入一碗再送出。");
        return;
      }
      const nameInput = document.getElementById("checkout-name");
      const phoneInput = document.getElementById("checkout-phone");
      const name = nameInput?.value.trim();
      const phone = phoneInput?.value.trim();
      if (!name) {
        showToast("請填入姓名再送出。");
        nameInput?.focus();
        return;
      }
      if (!phone) {
        showToast("請填入電話再送出。");
        phoneInput?.focus();
        return;
      }
      showToast(`模擬訂單已送出！歡迎 ${name}。`);
    });

    document.querySelector("[data-clear-cart]")?.addEventListener("click", () => {
      if (!cart.length) return;
      if (confirm("確定要清空購物車內的所有餐點嗎？")) {
        cart.length = 0;
        saveCartToStorage();
        renderCart();
        updateAll();
        showToast("購物車已清空。");
      }
    });
  }

  function renderTabs() {
    const root = document.querySelector("[data-tabs]");
    if (!root) return;

    root.innerHTML = steps.map((step, index) => `
      <button class="step-tab ${step.id === activeStep ? "is-active" : ""}" type="button" data-step="${step.id}">
        <span>${step.label}</span>
        <strong>${index + 1}</strong>
      </button>
    `).join("");

    root.querySelectorAll("[data-step]").forEach((button) => {
      button.addEventListener("click", () => {
        activeStep = button.dataset.step || "base";
        renderTabs();
        renderIngredients();
        updateStepCopy();
      });
    });
  }

  function renderPresets() {
    const root = document.querySelector("[data-presets]");
    if (!root) return;

    root.innerHTML = presets.map((preset, index) => `
      <button class="preset-card" type="button" data-preset="${index}">
        <span class="preset-image">
          <img src="${preset.img}" alt="">
        </span>
        <span>
          <strong>${preset.name}</strong>
          <span>${preset.desc}</span>
          <small>${preset.tag}</small>
        </span>
      </button>
    `).join("");

    root.querySelectorAll("[data-preset]").forEach((button) => {
      button.addEventListener("click", () => applyPreset(presets[Number(button.dataset.preset)], true));
    });
  }

  function renderIngredients() {
    const root = document.querySelector("[data-ingredients]");
    if (!root) return;

    const list = ingredients.filter((item) => item.group === activeStep);
    root.innerHTML = list.map((item) => `
      <button class="ingredient-card" type="button" data-ingredient="${item.id}">
        <div class="ingredient-image">
          <img class="ingredient-photo" src="${item.img}" alt="${item.name}">
          <img class="ingredient-icon" src="${item.icon}" alt="">
          <span class="ingredient-check" aria-hidden="true"></span>
        </div>
        <div class="ingredient-body">
          <div class="ingredient-title">
            <strong>${item.name}</strong>
            <span>${formatPrice(item.price)}</span>
          </div>
          <p class="ingredient-meta">${item.desc}</p>
          <div class="macro-row" aria-label="${item.name}營養素">
            <span><em>熱量</em><strong>${round(item.calories)} 卡</strong></span>
            <span><em>蛋白質</em><strong>${formatGram(item.protein)} g</strong></span>
            <span><em>碳水</em><strong>${formatGram(item.carbs)} g</strong></span>
            <span><em>脂肪</em><strong>${formatGram(item.fat)} g</strong></span>
          </div>
        </div>
      </button>
    `).join("");

    root.querySelectorAll("[data-ingredient]").forEach((button) => {
      button.addEventListener("click", () => toggleIngredient(button.dataset.ingredient));
    });

    updateIngredientStates();
    updateStepCopy();
  }

  function updateStepCopy() {
    const step = stepById.get(activeStep);
    if (!step) return;
    setText("[data-step-kicker]", `Step ${steps.findIndex((item) => item.id === activeStep) + 1}`);
    setText("[data-step-title]", step.title);
    setText("[data-step-hint]", step.hint);
  }

  function toggleIngredient(id) {
    const item = byId.get(id);
    if (!item) return;

    const step = stepById.get(item.group);
    const groupItems = selected.get(item.group) || [];
    const exists = groupItems.includes(id);

    if (exists) {
      selected.set(item.group, groupItems.filter((itemId) => itemId !== id));
    } else if (step.max === 1) {
      selected.set(item.group, [id]);
    } else if (groupItems.length < step.max) {
      selected.set(item.group, [...groupItems, id]);
    } else {
      showToast(`${step.label}最多只能選 ${step.max} 種。`);
      return;
    }

    saveSelectedToStorage();
    updateAll();
  }

  function applyPreset(preset, notify) {
    if (!preset) return;

    selected.clear();
    preset.items.forEach((id) => {
      const item = byId.get(id);
      const step = item ? stepById.get(item.group) : null;
      if (!item || !step) return;

      const groupItems = selected.get(item.group) || [];
      if (groupItems.length < step.max) selected.set(item.group, [...groupItems, id]);
    });

    editingId = "";
    document.querySelector("[data-note]").value = "";
    saveSelectedToStorage();
    updateAll();
    if (notify) showToast(`已套用「${preset.name}」。`);
  }

  function addToCart(event) {
    const validation = validateCurrentBowl();
    if (validation) {
      showToast(validation);
      return;
    }

    const isMobileLayout = window.matchMedia("(max-width: 700px)").matches;
    const shouldStayOnBuilder = isMobileLayout || event?.currentTarget?.dataset.addCartMode === "stay";
    const picked = getPickedItems();
    const totals = calculateTotals(picked);
    const note = document.querySelector("[data-note]").value.trim();
    const item = {
      id: editingId || `cart-${Date.now()}`,
      name: makeBowlName(picked),
      selected: serializeSelection(),
      note,
      totals
    };

    const index = cart.findIndex((entry) => entry.id === item.id);
    if (index >= 0) {
      cart[index] = item;
      showToast("已更新購物車品項。");
    } else {
      cart.push(item);
      showToast("已加入購物車。");
    }

    editingId = "";
    selected.clear();
    document.querySelector("[data-note]").value = "";
    saveCartToStorage();
    saveSelectedToStorage();
    updateAll();
    renderCart();
    if (shouldStayOnBuilder) closeMobileSummary();
    if (!shouldStayOnBuilder) openCart();
  }

  function validateCurrentBowl() {
    for (const step of steps) {
      const count = (selected.get(step.id) || []).length;
      if (count < step.min) return `請至少選 ${step.min} 種${step.label}。`;
    }
    return "";
  }

  function editCartItem(id) {
    const item = cart.find((entry) => entry.id === id);
    if (!item) return;

    selected.clear();
    Object.entries(item.selected).forEach(([group, ids]) => {
      selected.set(group, ids.filter((itemId) => byId.has(itemId)));
    });
    editingId = item.id;
    document.querySelector("[data-note]").value = item.note || "";
    saveSelectedToStorage();
    closeCart();
    updateAll();
    showToast("已載入這碗，可以修改後更新購物車。");
  }

  function removeCartItem(id) {
    const index = cart.findIndex((entry) => entry.id === id);
    if (index < 0) return;
    cart.splice(index, 1);
    saveCartToStorage();
    renderCart();
    updateCartBadge();
    showToast("已移除品項。");
  }

  function updateAll() {
    updateIngredientStates();
    updateSummary();
    updateTargetStatus();
    updateCartBadge();
  }

  function updateIngredientStates() {
    document.querySelectorAll("[data-ingredient]").forEach((button) => {
      const item = byId.get(button.dataset.ingredient);
      if (!item) return;

      const groupItems = selected.get(item.group) || [];
      const step = stepById.get(item.group);
      const isSelected = groupItems.includes(item.id);
      const isDisabled = !isSelected && groupItems.length >= step.max;
      button.classList.toggle("is-selected", isSelected);
      button.classList.toggle("is-disabled", isDisabled);
      button.disabled = isDisabled;
    });
  }

  function updateSummary() {
    const picked = getPickedItems();
    const totals = calculateTotals(picked);

    setText("[data-total-price]", `$${totals.price}`);
    setText("[data-mobile-price]", `$${totals.price}`);
    setText("[data-total='calories']", round(totals.calories));
    setText("[data-total='protein']", formatGram(totals.protein));
    setText("[data-total='carbs']", formatGram(totals.carbs));
    setText("[data-total='fat']", formatGram(totals.fat));
    setText("[data-mobile-nutrition]", `${round(totals.calories)} kcal / P ${formatGram(totals.protein)}g`);

    const root = document.querySelector("[data-selected-list]");
    if (!root) return;

    if (!picked.length) {
      root.innerHTML = "<p>還沒有選食材。</p>";
      return;
    }

    root.innerHTML = steps.map((step) => {
      const items = picked.filter((item) => item.group === step.id);
      if (!items.length) return "";
      return `
        <div class="selected-group">
          <strong>${step.label}</strong>
          <div>${items.map((item) => `<span class="chip"><img src="${item.icon}" alt="">${item.name}</span>`).join("")}</div>
        </div>
      `;
    }).join("");
  }

  function toggleMobileSummary() {
    const panel = document.querySelector("[data-mobile-bowl-details]");
    const button = document.querySelector("[data-mobile-summary-toggle]");
    if (!panel || !button) return;

    const isOpen = !panel.classList.contains("is-mobile-open");
    panel.classList.toggle("is-mobile-open", isOpen);
    document.body.classList.toggle("mobile-bowl-open", isOpen);
    button.setAttribute("aria-expanded", String(isOpen));
  }

  function closeMobileSummary() {
    const panel = document.querySelector("[data-mobile-bowl-details]");
    const button = document.querySelector("[data-mobile-summary-toggle]");
    panel?.classList.remove("is-mobile-open");
    document.body.classList.remove("mobile-bowl-open");
    button?.setAttribute("aria-expanded", "false");
  }

  function updateTargetStatus() {
    const root = document.querySelector("[data-target-status]");
    if (!root) return;

    if (activeMode === "relaxed") {
      root.innerHTML = "";
      return;
    }

    const totals = calculateTotals(getPickedItems());
    const targets = getTargets();
    const rows = [
      { label: "熱量", value: totals.calories, target: targets.calories, unit: "kcal", type: "max" },
      { label: "蛋白質", value: totals.protein, target: targets.protein, unit: "g", type: "min" },
      { label: "碳水", value: totals.carbs, target: targets.carbs, unit: "g", type: "max" },
      { label: "脂肪", value: totals.fat, target: targets.fat, unit: "g", type: "max" }
    ];

    root.innerHTML = rows.map((row) => {
      const progress = Math.min(100, (row.value / Math.max(row.target, 1)) * 100);
      const warning = row.type === "min" ? row.value < row.target : row.value > row.target;
      return `
        <div class="status-row ${warning ? "is-warning" : ""}">
          <span>${row.label}</span>
          <div class="status-bar" style="--progress:${progress}%"><i></i></div>
          <strong>${formatGram(row.value)} / ${formatGram(row.target)}${row.unit}</strong>
        </div>
      `;
    }).join("");
  }

  function renderCart() {
    const root = document.querySelector("[data-cart-items]");
    if (!root) return;

    // 控制展開明細按鈕的顯示狀態（為空時隱藏）
    document.querySelectorAll("[data-expand-container]").forEach((expandContainer) => {
      expandContainer.hidden = !cart.length;
    });

    // 控制清空購物車按鈕的顯示狀態（為空時隱藏）
    const clearCartBtn = document.querySelector("[data-clear-cart]");
    if (clearCartBtn) {
      clearCartBtn.hidden = !cart.length;
    }

    if (!cart.length) {
      root.innerHTML = '<p class="empty-cart">購物車目前是空的。</p>';
      closeDetails(); // 購物車為空時連同關閉左側明細面板
    } else {
      root.innerHTML = cart.map((item) => `
        <article class="cart-item">
          <div class="cart-item-head">
            <h3>${item.name}</h3>
            <div class="cart-item-price-arrow">
              <strong>$${item.totals.price}</strong>
              <span class="cart-arrow-icon"></span>
            </div>
          </div>
          <div class="cart-item-details">
            ${summarizeCartItem(item)}
            ${item.note ? `<div class="cart-item-note">備註：${escapeHtml(item.note)}</div>` : ""}
          </div>
          <div class="cart-item-actions">
            <button type="button" data-edit-cart="${item.id}">編輯</button>
            <button type="button" data-remove-cart="${item.id}">移除</button>
          </div>
        </article>
      `).join("");
    }

    root.querySelectorAll("[data-edit-cart]").forEach((button) => button.addEventListener("click", () => editCartItem(button.dataset.editCart)));
    root.querySelectorAll("[data-remove-cart]").forEach((button) => button.addEventListener("click", () => removeCartItem(button.dataset.removeCart)));

    // 綁定購物車內餐點的標頭點擊收合事件
    root.querySelectorAll(".cart-item-head").forEach((head) => {
      head.addEventListener("click", () => {
        const itemNode = head.closest(".cart-item");
        itemNode.classList.toggle("is-collapsed");
      });
    });

    const totals = cart.reduce((sum, item) => {
      sum.price += item.totals.price;
      sum.calories += item.totals.calories;
      sum.protein += item.totals.protein;
      sum.carbs += item.totals.carbs;
      sum.fat += item.totals.fat;
      return sum;
    }, { price: 0, calories: 0, protein: 0, carbs: 0, fat: 0 });

    setText("[data-cart-total]", `$${totals.price}`);
    setText("[data-cart-nutrition]", `熱量 ${round(totals.calories)} kcal | 蛋白質 ${formatGram(totals.protein)}g | 碳水 ${formatGram(totals.carbs)}g | 脂肪 ${formatGram(totals.fat)}g`);
    
    // 更新總營養素迷你徽章面板的值
    setText("[data-total-cal]", round(totals.calories));
    setText("[data-total-pro]", formatGram(totals.protein));
    setText("[data-total-carb]", formatGram(totals.carbs));
    setText("[data-total-fat]", formatGram(totals.fat));

    updateCartBadge();

    // 如果明細面板是打開的，也同步重新渲染明細內容
    const drawer = document.querySelector("[data-cart-drawer]");
    if (drawer?.classList.contains("details-open")) {
      renderDetails();
    }
  }

  function updateCartBadge() {
    setText("[data-cart-count]", cart.length);
  }

  function openCart() {
    renderCart();
    const drawer = document.querySelector("[data-cart-drawer]");
    drawer?.classList.add("is-open");
    drawer?.setAttribute("aria-hidden", "false");
    document.body.classList.add("cart-open");
  }

  function closeCart() {
    closeDetails(); // 關閉購物車時連同左側明細面板一起關閉
    const drawer = document.querySelector("[data-cart-drawer]");
    drawer?.classList.remove("is-open");
    drawer?.setAttribute("aria-hidden", "true");
    document.body.classList.remove("cart-open");
  }

  function openDetails() {
    renderDetails();
    const drawer = document.querySelector("[data-cart-drawer]");
    drawer?.classList.add("details-open");
  }

  function closeDetails() {
    const drawer = document.querySelector("[data-cart-drawer]");
    drawer?.classList.remove("details-open");
  }

  function renderDetails() {
    const root = document.querySelector(".details-items");
    if (!root) return;

    if (!cart.length) {
      root.innerHTML = '<p class="empty-cart">沒有明細項目。</p>';
      return;
    }

    root.innerHTML = cart.map((item, index) => {
      return `
        <article class="cart-item details-item" data-detail-item-index="${index}">
          <div class="cart-item-head details-item-toggle">
            <h3>${item.name}</h3>
            <div class="cart-item-price-arrow">
              <strong>$${item.totals.price}</strong>
              <span class="cart-arrow-icon"></span>
            </div>
          </div>
          <div class="cart-item-details">
            ${summarizeCartItem(item)}
            ${item.note ? `<div class="cart-item-note">備註：${escapeHtml(item.note)}</div>` : ""}
          </div>
          <div class="cart-item-actions">
            <button type="button" data-details-edit="${item.id}">編輯</button>
            <button type="button" data-details-remove="${item.id}">移除</button>
          </div>
        </article>
      `;
    }).join("");

    // 綁定明細內餐點標頭點擊 Accordion 收合與展開
    root.querySelectorAll(".details-item-toggle").forEach((btn) => {
      btn.addEventListener("click", () => {
        const itemNode = btn.closest(".details-item");
        itemNode.classList.toggle("is-collapsed");
      });
    });

    // 綁定明細面板的編輯按鈕
    root.querySelectorAll("[data-details-edit]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        editCartItem(btn.dataset.detailsEdit);
      });
    });

    // 綁定明細面板的移除按鈕
    root.querySelectorAll("[data-details-remove]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        removeCartItem(btn.dataset.detailsRemove);
      });
    });
  }

  function getPickedItems() {
    return Array.from(selected.values()).flat().map((id) => byId.get(id)).filter(Boolean);
  }

  function calculateTotals(items) {
    return items.reduce((sum, item) => {
      const multiplier = getMultiplier(item);
      sum.price += Math.round(item.price * multiplier);
      sum.calories += item.calories * multiplier;
      sum.protein += item.protein * multiplier;
      sum.carbs += item.carbs * multiplier;
      sum.fat += item.fat * multiplier;
      return sum;
    }, { price: basePrice, calories: 0, protein: 0, carbs: 0, fat: 0 });
  }

  function getMultiplier(item) {
    const groupItems = selected.get(item.group) || [];
    if (item.group === "base" && groupItems.length === 2) return 0.5;
    return 1;
  }

  function getTargets() {
    const get = (key, fallback) => {
      const value = Number(document.querySelector(`[data-target='${key}']`)?.value);
      return Number.isFinite(value) && value > 0 ? value : fallback;
    };

    return {
      calories: activeMode === "strict" ? get("calories", 650) : 700,
      protein: activeMode === "strict" ? get("protein", 35) : 25,
      carbs: activeMode === "strict" ? get("carbs", 65) : 85,
      fat: activeMode === "strict" ? get("fat", 28) : 35
    };
  }

  function serializeSelection() {
    const data = {};
    selected.forEach((ids, group) => {
      data[group] = [...ids];
    });
    return data;
  }

  function makeBowlName(items) {
    const protein = items.find((item) => item.group === "protein");
    const base = items.find((item) => item.group === "base");
    if (protein && base) return `${protein.name}${base.name}彩碗`;
    return "自選彩碗";
  }

  function summarizeCartItem(item) {
    const parts = steps.map((step) => {
      const names = (item.selected[step.id] || []).map((id) => byId.get(id)?.name).filter(Boolean);
      if (!names.length) return "";
      return `${step.label}: ${names.join("、")}`;
    }).filter(Boolean);

    const ingredientsHtml = `<div class="cart-item-ingredients">${parts.map(p => `<span class="cart-ing-item">${p}</span>`).join("")}</div>`;
    const macrosHtml = `
      <div class="cart-item-macros">
        <span class="macro-badge">熱量 ${round(item.totals.calories)} kcal</span>
        <span class="macro-badge">蛋白質 ${formatGram(item.totals.protein)}g</span>
        <span class="macro-badge">碳水 ${formatGram(item.totals.carbs)}g</span>
        <span class="macro-badge">脂肪 ${formatGram(item.totals.fat)}g</span>
      </div>
    `;
    return ingredientsHtml + macrosHtml;
  }

  function formatPrice(price) {
    return price > 0 ? `+$${price}` : "";
  }

  function formatGram(value) {
    return Number.isInteger(value) ? String(value) : value.toFixed(1);
  }

  function round(value) {
    return String(Math.round(value));
  }

  function setText(selector, text) {
    document.querySelectorAll(selector).forEach((element) => {
      element.textContent = text;
    });
  }

  function showToast(message) {
    const toast = document.querySelector("[data-toast]");
    if (!toast) return;

    window.clearTimeout(toastTimer);
    toast.textContent = message;
    toast.classList.add("is-visible");
    toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 2600);
  }

  function saveCartToStorage() {
    try {
      localStorage.setItem("colorbowl_cart", JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }

  function loadCartFromStorage() {
    try {
      const stored = localStorage.getItem("colorbowl_cart");
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          cart.length = 0;
          cart.push(...parsed);
        }
      }
    } catch (e) {
      console.error(e);
    }
  }

  function saveSelectedToStorage() {
    try {
      const state = {
        selected: serializeSelection(),
        editingId: editingId,
        note: document.querySelector("[data-note]")?.value || ""
      };
      localStorage.setItem("colorbowl_current_bowl", JSON.stringify(state));
    } catch (e) {
      console.error(e);
    }
  }

  function loadSelectedFromStorage() {
    try {
      const stored = localStorage.getItem("colorbowl_current_bowl");
      if (stored) {
        const state = JSON.parse(stored);
        if (state) {
          selected.clear();
          if (state.selected) {
            Object.entries(state.selected).forEach(([group, ids]) => {
              if (Array.isArray(ids)) {
                selected.set(group, ids.filter((itemId) => byId.has(itemId)));
              }
            });
          }
          editingId = state.editingId || "";
          const noteArea = document.querySelector("[data-note]");
          if (noteArea) {
            noteArea.value = state.note || "";
          }
        }
      }
    } catch (e) {
      console.error(e);
    }
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }
})();
