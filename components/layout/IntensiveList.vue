<template>
	<section class="section">
		<h2 class="section__title">Доступные интенсивы</h2>

		<!-- <Carousel
      :itemsToShow="
        $viewport.isLessThan('tablet') || intensivies.length < 2 ? 1 : 2
      "
      :wrap-around="$viewport.isLessThan('tablet')"
      :mouseDrag="false"
    >
      <Slide v-for="(int, index) in intensivies" :key="index">
        <div
          class="section__card section__card_main w-96 max-[768px]:w-full max-[1300px]:w-80"
          @click="changeIntensive(int)"
        >
          <h3
            class="section__card-title mb-3 font-bold bg-gradient-to-r from-amber-400 to-yellow-300 inline-block text-transparent bg-clip-text"
          >
            {{ int.name }}
          </h3>

          <div
            class="divide-x divide-neutral-300 mb-3 section__card section__card_mini"
          >
            <span class="mr-2">
              {{ int.lessonsAmount }}
              {{ getNoun(int.lessonsAmount, "урок", "урока", "уроков") }}
            </span>
            <span class="pl-2">{{ int.duration }} ч.</span>
          </div>

          <p class="line-clamp-2">
            {{ int.descr }}
          </p>
        </div>
      </Slide>

      <template #addons>
        <Pagination />
        <Navigation v-if="!$viewport.isLessThan('tablet')" />
      </template>
    </Carousel> -->

		<ul class="flex flex-row flex-wrap gap-6 justify-center w-full">
			<li
				class="section__card section__card_main gap-4 w-1/2 max-[768px]:w-full"
				:class="int.id === currentIntensive.id && 'section__card_active'"
				v-for="(int, index) in intensivies"
				:key="index"
				@click="changeIntensive(int)"
			>
				<h3
					class="section__card-title text-center font-bold bg-gradient-to-r from-amber-400 to-yellow-300 inline-block text-transparent bg-clip-text"
				>
					{{ int.name }}
				</h3>

				<div class="flex flex-col gap-1">
					<div class="divide-x-2 divide-neutral-300 text-center text-xl">
						<span class="mr-2 font-extrabold">
							{{ int.lessonsAmount }}
							{{ getNoun(int.lessonsAmount, "урок", "урока", "уроков") }}
						</span>
						<span class="px-2 font-extrabold">
							{{ int.duration }}
							{{ getNoun(int.duration, "час", "часа", "часов") }}
						</span>
					</div>

					<span class="px-2 font-extrabold mx-auto">
						+ стрим с ответами на вопросы
					</span>
				</div>

				<p class="text-center font-thin">
					{{ int.descr }}
				</p>

				<a :href="int.buyLink" class="section__buy-btn"> Приобрести </a>
			</li>
		</ul>

		<div class="flex flex-col">
			<h3 class="section__cur-title mb-7">{{ currentIntensive.name }}</h3>

			<div
				v-thtml="currentIntensive.fullDescription"
				class="mb-7 text-neutral-300"
			></div>

			<h3 class="mb-3 section__cur-title !text-3xl">Программа интенсива</h3>

			<UAccordion
				class="accordion"
				color="white"
				variant="soft"
				:size="$viewport.isLessThan('desktopMedium') ? 'lg' : 'xl'"
				multiple
				:items="currentIntensive.programm"
				:ui="{
					default: {
						class:
							'text-2xl text-left w-full max-[540px]:text-lg border-t rounded-none py-5 max-[1300px]:py-4',
						truncate: false,
					},
					item: {
						size: 'text-lg max-[540px]:text-base',
					},
					transition: {
						enterActiveClass: 'duration-500',
						leaveActiveClass: 'duration-500',
					},
				}"
			>
				<template #item="{ item }">
					<p v-thtml="item.content" class="text-white section__card"></p>
				</template>
			</UAccordion>

			<div
				class="mt-7 w-full flex flex-row items-center gap-8 max-[540px]:flex-col max-[540px]:items-end max-[540px]:gap-4"
			>
				<a
					:href="currentIntensive.buyLink"
					class="section__buy-btn section__buy-btn_full !w-1/5 max-[1020px]:!w-1/3 max-[768px]:!w-1/2 max-[540px]:!w-full"
				>
					Приобрести
				</a>
				<div
					v-if="currentIntensive.sale"
					class="flex flex-row items-start gap-3"
				>
					<span class="text-5xl font-semibold max-[768px]:text-4xl">
						{{ currentIntensive.sale }} ₽
					</span>

					<span
						class="line-through text-3xl max-[768px]:text-2xl text-neutral-500"
					>
						{{ currentIntensive.price }} ₽
					</span>
				</div>

				<span v-else class="text-5xl font-semibold max-[540px]:text-4xl">
					{{ currentIntensive.price }} ₽
				</span>
			</div>
		</div>
	</section>
</template>

<script setup>
const { $viewport } = useNuxtApp();

import { intensivies } from "~/assets/intensivies/intensivies";

const currentIntensive = ref(intensivies[0]);

const changeIntensive = (int) => {
	currentIntensive.value = int;
};

const getNoun = (num, one, two, five) => {
	let n = Math.abs(num);
	n %= 100;
	if (n >= 5 && n <= 20) {
		return five;
	}
	n %= 10;
	if (n === 1) {
		return one;
	}
	if (n >= 2 && n <= 4) {
		return two;
	}
	return five;
};
</script>

<style scoped>
.section {
	display: flex;
	flex-direction: column;
	gap: 50px;
}

.section__title {
	font-size: 70px;
	font-weight: 800;
	line-height: 110%;
	background: linear-gradient(
		90deg,
		#e59cff 0.01%,
		#ba9cff 50.01%,
		#9cb2ff 100%
	);
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
}

.section__card {
	border-radius: 24px;
	border: 1px solid #e59cff;
	background: rgba(10, 1, 25, 0.6);
	color: rgba(255, 255, 255, 0.8);
	font-size: 18px;
	padding: 24px;
	position: relative;
}

.section__card_active {
	box-shadow: 0 0 15px #e59cff;
}

.section__card_main:hover {
	cursor: pointer;
	box-shadow: 0 0 15px #e59cff;
	transition: all 0.2s ease-in-out;
}

.section__card_main {
	display: flex;
	flex-direction: column;
	transition: all 0.2s ease-in-out;
}

.section__card_mini {
	border-radius: 10px;
	padding: 6px 12px;
}

.section__card-title {
	font-size: 32px;
	line-height: 140%;
}

.carousel__slide {
	padding: 15px 10px;
	width: fit-content !important;
	margin-bottom: 10px;
}

.section__cur-title {
	font-size: 42px;
	font-weight: 700;
	background: linear-gradient(
		90deg,
		#9cb2ff 0.01%,
		#c2b8ff 50.01%,
		#e59cff 100%
	);
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
}

.section__buy-btn {
	width: 100%;
	padding: 13px 18px;
	text-align: center;
	border-radius: 12px;
	border: 1px solid #e59cff;
	background: linear-gradient(90deg, #c2b8ff 0%, #5a2bc7 100%);
	box-shadow: 0px 0px 15.1px 0px rgba(198, 135, 234, 0.5) inset;
	color: #0a0119;
	font-size: 16px;
	transition: box-shadow 0.2s ease-in-out;
}

.section__buy-btn_full {
	font-size: 21px;
	padding: 16px 32px;
	border-radius: 16px;
}

.section__buy-btn:hover {
	box-shadow: 0px 0px 15.1px 0px #e59cff inset;
	transition: box-shadow 0.2s ease-in-out;
}

@media screen and (max-width: 1300px) {
	.section {
		gap: 32px;
	}

	.section__title {
		font-size: 58px;
	}

	.section__card {
		border-radius: 16px;
		padding: 18px;
	}

	.section__card-title {
		font-size: 28px;
	}

	.carousel {
		padding: 0 20px;
	}

	.section__cur-title {
		font-size: 36px;
	}
}

@media screen and (max-width: 540px) {
	.section {
		gap: 26px;
	}

	.section__title {
		font-size: 28px;
	}

	.section__card {
		border-radius: 12px;
		font-size: 16px;
		padding: 12px;
	}

	.section__card_mini {
		border-radius: 8px;
		padding: 4px 10px;
	}

	.section__card-title {
		font-size: 24px;
	}

	.carousel {
		padding: 0;
	}

	.section__buy-btn {
		padding: 10px 15px;
		border-radius: 8px;
	}

	.section__buy-btn_full {
		font-size: 18px;
		padding: 12px 20px;
		border-radius: 12px;
	}

	.section__cur-title {
		font-size: 32px;
	}
}
</style>
