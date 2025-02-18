export default function Home() {
	const baseUrl =
		typeof window !== "undefined" ? window.location.origin : "<base_url>";

	return (
		<div className="max-w-2xl mx-auto p-6">
			<h1 className="text-4xl text-center p-4">
				Criando API de Chat no Next.js
			</h1>
			<hr className="my-4" />

			<p className="text-lg">
				Esta API permite que você armazene e recupere mensagens de um chat
				utilizando <strong>Next.js</strong> e <strong>Prisma</strong> com um
				banco de dados SQLite. Aqui está como você pode usá-la:
			</p>

			<h2 className="text-2xl mt-6">📥 Obter todas as mensagens</h2>
			<p className="mt-2">
				Faça uma requisição <code>GET</code> para:
			</p>
			<pre className="bg-gray-200 p-3 rounded mt-2">{`GET ${baseUrl}/api/chat`}</pre>
			<p className="mt-2">
				Retorna todas as mensagens armazenadas no banco de dados.
			</p>

			<h3 className="text-xl mt-4">❌ Possíveis erros</h3>
			<p className="mt-2">
				Se não houver mensagens armazenadas, a API responderá com:
			</p>
			<pre className="bg-red-200 p-3 rounded mt-2">
				{`{
  "error": "Nenhum chat encontrado"
}`}
			</pre>

			<h2 className="text-2xl mt-6">📤 Enviar uma nova mensagem</h2>
			<p className="mt-2">
				Envie uma requisição <code>POST</code> com um corpo JSON contendo a
				mensagem:
			</p>
			<pre className="bg-gray-200 p-3 rounded mt-2">
				{`POST ${baseUrl}/api/chat
Content-Type: application/json

{
  "mensagem": "Olá, mundo!"
}`}
			</pre>
			<p className="mt-2">
				Se a requisição for bem-sucedida, a API retornará o objeto da mensagem
				criada.
			</p>

			<h3 className="text-xl mt-4">❌ Possíveis erros</h3>
			<p className="mt-2">
				Se a mensagem não for enviada no corpo da requisição, a API responderá
				com:
			</p>
			<pre className="bg-red-200 p-3 rounded mt-2">
				{`{
  "error": "mensagem é obrigatória"
}`}
			</pre>

			<p className="mt-6 text-center text-gray-600">
				🚀 Agora você pode integrar essa API ao seu frontend e criar um chat em
				tempo real!
			</p>
		</div>
	);
}
