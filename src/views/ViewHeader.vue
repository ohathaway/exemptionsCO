<template>
  <header
    id="about"
    class="exemptions-section p-3 lg:p-20 flex flex-col border-b border-gray-400 min-h-screen"
  >
    <div class="my-auto">
      <h1 class="mb-0 font-bold text-gray-800 font-sans uppercase">
        Bankruptcy Exemptions<br>
        <span class="state-name">Colorado</span>
      </h1>
      <div class="text-gray-600 font-sans text-lg lg:text-xl font-medium uppercase mb-5">
        an informational resource provided by <a
          href="https://ohlawacolorado.com/"
          target="_blank"
        >The Law Offices of Owen Hathaway</a> &bull; <a href="tel:+1-970-818-3052">970-818-3052</a>
      </div>
      <div class="text-gray-600 font-sans text-lg lg:text-xl font-medium uppercase mb-5 italic">
        Information current as of {{ updated }}
      </div>

      <p class="mb-5">
        Bankruptcy can be scary. You're already not answering the phone because you know it's just another creditor asking for money you don't have. Now you've decided to take care this problem by filing for bankruptcy protection, which could be a fantastic turning point in your life, but now you're worried that some of the things you need to survive might get taken in the bankruptcy. Fortunately, the bankruptcy code provides a certain amount of relief from this particular worry. It's called Exemptions.
      </p>
      <p class="mb-5">
        Yes, once you file a Chapter 7 bankruptcy petition, everything you own is subject to being taken and sold to pay off some of your debt. However, you get to protect a whole bunch of things using Exemptions. Exemptions essentially take the covered property back out of the bankruptcy estate (If you don't know about the bankruptcy estate, you should ask your attorney. It's important to understand.)
      </p>
      <p class="mb-5">
        This site provides a description of the exemptions provided for debtors in the State of Colorado. Folks who live in Colorado and file for bankruptcy protection may use these rules to protect their assets from being seized by the trustee. Every state has its own rules, so don't assume any of these particular rules apply anywhere but Colorado. There are also complicated timing rules to figure out if you are allowed to use Colorado's exemptions even if you've lived here for a couple years. You may have to use another state's exemptions or even the federal exemptions depending on your situation.
      </p>
      <p class="mb-5">
        An attorney licensed to practice in Colorado state and federal courts created this site. The information here is not legal advice though. These things can get real complicated. If you have any questions, you should ask an attorney to help you figure out how these rules work.
      </p>
      <p class="mb-5">
        One interesting thing: these rules can also be used in non-bankruptcy debt collection scenarios as well. In fact, the state code does not mention bankruptcy much at all. The federal bankruptcy code just uses a neat constitutional waiver of federal law preemption here to permit states to make their own rules. (sorry, nerd lawyer moment there)
      </p>
    </div>
  </header>
</template>

<script setup>
defineProps({
  updated: String
})
</script>

