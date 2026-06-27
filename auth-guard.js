// ============================================================
//  auth-guard.js — protect pages, fetch role, handle logout
//  Usage: const ctx = await requireAuth({admin:true});
// ============================================================
async function requireAuth(opts={}){
  const { data:{ session } } = await sb.auth.getSession();
  if(!session){ window.location.href = "index.html"; return null; }
  const user = session.user;
  const { data: profile } = await sb.from("profiles").select("is_admin,email").eq("id", user.id).single();
  const isAdmin = !!(profile && profile.is_admin);

  // admin-only page but user isn't admin → send to dashboard
  if(opts.admin && !isAdmin){ window.location.href = "dashboard.html"; return null; }
  // if an admin lands on a couple page, that's allowed (admin can do everything)

  return { user, isAdmin, email: (profile && profile.email) || user.email };
}

async function signOut(){
  await sb.auth.signOut();
  window.location.href = "index.html";
}
