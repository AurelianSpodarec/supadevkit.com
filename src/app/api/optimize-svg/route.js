import { optimize } from 'svgo';

export async function POST(req) {
  try {
    const { svg, plugins } = await req.json();

    if (!svg) {
      return new Response(JSON.stringify({ error: 'SVG input is required' }), { status: 400 });
    }

    const result = optimize(svg, {
      plugins: plugins || [], // Use provided plugins or default
    });

    return new Response(JSON.stringify({ optimizedSvg: result.data }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
