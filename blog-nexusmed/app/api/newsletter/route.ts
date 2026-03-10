import { NextRequest, NextResponse } from 'next/server';

// Cole aqui a URL gerada pelo Google Apps Script (Deploy > Web App)
const APPS_SCRIPT_URL = process.env.APPS_SCRIPT_URL ?? '';

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'E-mail inválido.' }, { status: 400 });
    }

    if (!APPS_SCRIPT_URL) {
      return NextResponse.json({ error: 'Integração não configurada.' }, { status: 500 });
    }

    const now = new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });

    const res = await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, data: now }),
    });

    if (!res.ok) {
      throw new Error('Erro ao salvar no Google Sheets.');
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[newsletter]', err);
    return NextResponse.json({ error: 'Erro interno.' }, { status: 500 });
  }
}
