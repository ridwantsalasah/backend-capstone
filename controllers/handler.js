// const handler = async (req, res) => {
//     const { method } = req;

//     switch (method) {   
//         case 'GET':
//             await dbConnect();
//             res.json({ ok: true });
//         case 'POST':
//             return postThread(req, res);
//         // case yg lain
//         default:
//             return res.status(404).send('Not Found');
//     }
// };

// export default handler;