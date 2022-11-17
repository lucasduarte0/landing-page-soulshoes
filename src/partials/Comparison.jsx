/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import ButtonComprar from "../components/ButtonComprar";
import "../css/comparison.css";
import Transicao from "../images/nuvem-transicao.png";
import Logo from "../images/logo.png";

export default function Comparison() {
	return (
		<section className="relative  md:p-26 bg-white -mb-60">
			<img
				className="md:hidden relative -top-28 -mb-40 bg-fill w-full mx-full md:px-36 z-50"
				src={Transicao}
				width="768"
				height="432"
				alt="Hero"
			/>{" "}
			{/* Section header */}{" "}
			<div className="container relative pb-48">
				<div className="row">
					<div className="col-6 col-md-3 px-0.5 text-right order-2 order-md-1">
						<div className="flex items-center justify-center h-16 m-auto">
							<h4 className="bg-gray-600 text-white font-bold text-lg p-1.5 rounded-lg">
								OUTRAS MARCAS{" "}
							</h4>{" "}
						</div>{" "}
						<div className="items mt-2 pr-1">
							<li className="flex justify-end align-items-center text-right">
								<h3> Material rígido e pesado </h3>{" "}
								<img
									src="https://www.renovabe.com.br/tema/renovabe-vue-novo/dist/img/CHECK%201.bb1c5a76.svg"
									className="img-fluid pl-2"
								/>
							</li>{" "}
							<li className="flex justify-end align-items-center text-right">
								<h3> Entrega demorada </h3>{" "}
								<img
									src="https://www.renovabe.com.br/tema/renovabe-vue-novo/dist/img/CHECK%201.bb1c5a76.svg"
									className="img-fluid pl-2"
								/>
							</li>{" "}
							<li className="flex justify-end align-items-center text-right">
								<h3> Acabando inferior </h3>{" "}
								<img
									src="https://www.renovabe.com.br/tema/renovabe-vue-novo/dist/img/CHECK%201.bb1c5a76.svg"
									className="img-fluid pl-2"
								/>
							</li>{" "}
							<li className="flex justify-end align-items-center text-right">
								<h3> Material escorregadío </h3>{" "}
								<img
									src="https://www.renovabe.com.br/tema/renovabe-vue-novo/dist/img/CHECK%201.bb1c5a76.svg"
									className="img-fluid pl-2"
								/>
							</li>{" "}
							<li className="flex justify-end align-items-center text-right">
								<h3> Formato não encaixa aos pés </h3>{" "}
								<img
									src="https://www.renovabe.com.br/tema/renovabe-vue-novo/dist/img/CHECK%201.bb1c5a76.svg"
									className="img-fluid pl-2"
								/>
							</li>{" "}
						</div>{" "}
					</div>{" "}
					<div className="col-12 col-md-6 order-1 order-md-2 px-2">
						<img
							src="https://ik.imagekit.io/soulshoes/COMPARATIVO-NUVEM_AGEx034a6.png?ik-sdk-version=javascript-1.4.3&updatedAt=1668031163575"
							className="img-fluid relative posi-desk desk mb-2"
						/>
					</div>{" "}
					<div className="col-6 col-md-3 order-3 order-md-3 px-0.5">
						<div className="h-16 flex items-center justify-center">
							{" "}
							{/* PEGADA COMFORT */}{" "}
							<img src={Logo} className="w-fit px-5 m-auto" />
						</div>{" "}
						<div className="items mt-2">
							<li className="flex justify-start align-items-center text-start">
								<div className="new"> </div>{" "}
								<img
									src="https://www.renovabe.com.br/tema/renovabe-vue-novo/dist/img/CHECK%202.87915573.svg"
									className="self-start h-auto pt-1 img-fluid ml-2 pr-2"
								/>
								<h3>
									Material 100 % EVA <sup> ® </sup>{" "}
								</h3>{" "}
							</li>{" "}
							<li className="flex justify-start align-items-center text-start">
								<div className="new"> </div>{" "}
								<img
									src="https://www.renovabe.com.br/tema/renovabe-vue-novo/dist/img/CHECK%202.87915573.svg"
									className=" self-start h-auto pt-1 img-fluid ml-2 pr-2"
								/>
								<h3> Técnologia desenvolvida no Brasil </h3>{" "}
							</li>{" "}
							<li className="flex justify-start align-items-center text-start">
								<div className="new"> </div>{" "}
								<img
									src="https://www.renovabe.com.br/tema/renovabe-vue-novo/dist/img/CHECK%202.87915573.svg"
									className="self-start h-auto pt-1 img-fluid ml-2 pr-2"
								/>
								<h3> Material aderente ao chão </h3>{" "}
							</li>{" "}
							<li className="flex justify-start align-items-center text-start">
								<div className="new"> </div>{" "}
								<img
									src="https://www.renovabe.com.br/tema/renovabe-vue-novo/dist/img/CHECK%202.87915573.svg"
									className="self-start h-auto pt-1 img-fluid ml-2 pr-2"
								/>
								<h3> Fácil limpeza </h3>{" "}
							</li>{" "}
							<li className="flex justify-start align-items-center text-start">
								<div className="new"> </div>{" "}
								<img
									src="https://www.renovabe.com.br/tema/renovabe-vue-novo/dist/img/CHECK%202.87915573.svg"
									className="img-fluid self-start h-auto pt-1 ml-2 pr-2"
								/>
								<h3> Envio em 24 horas </h3>{" "}
							</li>{" "}
							<li className="flex justify-start align-items-center text-start">
								<div className="new"> </div>{" "}
								<img
									src="https://www.renovabe.com.br/tema/renovabe-vue-novo/dist/img/CHECK%202.87915573.svg"
									className="self-start h-auto pt-1 img-fluid ml-2 pr-2"
								/>
								<h3> Atendimento 24 / 7 </h3>{" "}
							</li>{" "}
							<li className="flex justify-start align-items-center text-start">
								<div className="new"> </div>{" "}
								<img
									src="https://www.renovabe.com.br/tema/renovabe-vue-novo/dist/img/CHECK%202.87915573.svg"
									className=" self-start h-auto pt-1 img-fluid ml-2 pr-2"
								/>
								<h3> Até 7 dias para devolução </h3>{" "}
							</li>{" "}
						</div>{" "}
					</div>{" "}
				</div>{" "}
				<h2 className="text-center h2 w-full mt-6 text-gray-700 font-bold">
					APENAS{" "}
				</h2>{" "}
				<div className="flex justify-center items-baseline">
					<span className="mr-2 text-5xl font-extrabold"> R$127, 90 </span>{" "}
					<div className="text-gray-500 dark:text-gray-400 dark:text-gray-400">
						<p> /frete</p>
						<p> grátis </p>{" "}
					</div>{" "}
				</div>{" "}
				<div className="px-5 mt-8 pb-10">
					<ButtonComprar
						className="md:mt-10 text-2xl"
						titleColor="gray-700"
						text="COMPRAR AGORA COM FRETE GRATIS!"
						subText="APROVEITE POR APENAS R$127,90"
					></ButtonComprar>{" "}
				</div>{" "}
			</div>{" "}
		</section>
	);
}
