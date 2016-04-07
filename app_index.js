function __(s) {return s}
PAGES_HTML = {}

PHTML = (function() {/*
<div style="display:none" id="page_search_estab" data-role="page" data-control-title="BuscarEstabelecimentos" data-theme="e">
    <div data-theme="a" data-role="header"  data-position="fixed"  data-tap-toggle="false" >
        <h3>
            {t}Me Pediu{/t}
        </h3>  
    </div> 
    <ul id="tabs_search_estab">
        <li id="tab1"><img data-img_src="imgs/icons/location.png" style="height:32px;vertical-align:middle"></li>
        <li id="tab2"><img data-img_src="imgs/icons/favorite.png" style="height:32px;vertical-align:middle"></li>
    </ul>
    <div id="div_estab_search_origin" data-cp_fcall="changeSearchEstabOrigin">
        <table>
            <tbody>
                <tr>
                    <td width="99%" style="font-weight:bold">
                        {t}Buscando estabelecimentos{/t}
                    </td>
                    <td width="1%">
                        <img data-img_src="imgs/icons/switch.png">
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <div data-tabs_content="tab1">
        <div id="div_estabs_search"></div>
    </div>
    <div data-tabs_content="tab2" class="ui-content">
        <div class="ui-btn ui-btn-a" data-cp_fcall="add_estab_por_cod">
            {t}Adicionar pelo código{/t}
        </div>
        <div id="div_lista_favs"></div>
    </div>
</div>
*/});//retirando a primeira e as ultimas duas linhas do corpo do comentario da funcao anonima para montar o html
PHTML = PHTML.toString();
PHTML = PHTML.substring(PHTML.indexOf("\n")+1);
PHTML = PHTML.substring(0, PHTML.lastIndexOf("\n"));
PHTML = PHTML.replace(/{t}(.*?){\/t}/g, function () {return __(arguments[1]);});
PAGES_HTML['00_page_search_estab']=PHTML

PHTML = (function() {/*
<div style="display:none" id="page_add_endereco" data-role="page" data-control-title="Adicionar Endereco" data-theme="e">
    <div data-theme="a" data-role="header"  data-position="fixed"  data-tap-toggle="false" >
        <h3>
            {t}Adicionar Endereço{/t}
        </h3>
        <button class="ui-btn ui-btn-left ui-icon-carat-l ui-btn-icon-notext" data-cp_fcall="NAV.back"></button>
    </div>
    <div id="div_content_add_end" class="ui-content">
        <table>
            <tr>
                <td>
                    <a class="ui-btn ui-btn-b ui-corner-all" data-cp_fcall="Endereco.setAddMode(C)">
                        {t}Por CEP{/t}
                    </a>
                </td>
                <td>
                    <a class="ui-btn ui-btn-b ui-corner-all" data-cp_fcall="Endereco.setAddMode(L)">
                        {t}Redondezas{/t}
                    </a>
                </td>
                <td>
                    <a class="ui-btn ui-btn-b ui-corner-all" data-cp_fcall="Endereco.setAddMode(M)">
                        {t}Manual{/t}
                    </a>
                </td>
            </tr>
        </table>
        <br>
        <div id="div_novo_end_C" style="display:none">
            <table>
                <tr>
                    <td style="white-space:nowrap;width:1px">
                        {t}Insira o CEP{/t} : 
                    </td>
                    <td>
                        <input id="add_end_C_input_cep" placeholder="CEP">
                    </td>
                </tr>
            </table>
            <BR>
            <a class="ui-btn ui-btn-b ui-corner-all" data-cp_fcall="Endereco.buscarCep()">
                {t}Buscar{/t}
            </a>
        </div>
        <div id="div_novo_end_M" style="display:none">
            <table>
                <tr>
                    <td width="1%">
                        {t}Estado{/t}
                        <select id="add_end_M_uf" onchange="Endereco.getCidades()">
                            <option value=""></option><option value='AC'>AC</option><option value='AL'>AL</option><option value='AM'>AM</option>
                            <option value='AP'>AP</option><option value='BA'>BA</option><option value='CE'>CE</option>
                            <option value='DF'>DF</option><option value='ES'>ES</option><option value='GO'>GO</option>
                            <option value='MA'>MA</option><option value='MG'>MG</option><option value='MS'>MS</option>
                            <option value='MT'>MT</option><option value='PA'>PA</option><option value='PB'>PB</option>
                            <option value='PE'>PE</option><option value='PI'>PI</option><option value='PR'>PR</option>
                            <option value='RJ'>RJ</option><option value='RN'>RN</option><option value='RO'>RO</option>
                            <option value='RR'>RR</option><option value='RS'>RS</option><option value='SC'>SC</option>
                            <option value='SE'>SE</option><option value='SP'>SP</option><option value='TO'>TO</option>
                        </select>
                    </td>
                    <td>
                        {t}Cidade{/t}
                        <select id="add_end_M_cidade"></select>
                    </td>
                </tr>
            </table>
            <table>
                <tr><td width="1%">{t}Endereço{/t}</td></tr><tr><td><input type="text" id="add_end_M_endereco" placeholder="Endereço"></td></tr>
            </table>
            <div class="ui-btn ui-btn-a remover_p_balcao" data-cp_fcall="Endereco.buscarManual()">
                {t}Buscar Endereço{/t}
            </div>
        </div>
        <div id="div_novo_end_L" style="display:none">
        </div>
        <BR>
        <div id="div_pick_end"></div>
    </div>
</div>

*/});//retirando a primeira e as ultimas duas linhas do corpo do comentario da funcao anonima para montar o html
PHTML = PHTML.toString();
PHTML = PHTML.substring(PHTML.indexOf("\n")+1);
PHTML = PHTML.substring(0, PHTML.lastIndexOf("\n"));
PHTML = PHTML.replace(/{t}(.*?){\/t}/g, function () {return __(arguments[1]);});
PAGES_HTML.page_add_endereco=PHTML

PHTML = (function() {/*
<div style="display:none" id="page_add_item" data-role="page" data-control-title="Adicionar Item" data-theme="e">
    <div data-theme="a" data-role="header" id="div_header_add_item">
        <h3>
            {t}Adicionar ao carrinho{/t}
        </h3>
        <button class="ui-btn ui-btn-left ui-icon-carat-l ui-btn-icon-notext" data-cp_fcall="NAV.back"></button>
    </div>
    <div id="div_foto_item" style="width:100%;min-height:150px;background-repeat: no-repeat;background-position: center; "></div>
    <div class="ui-content" id="div_page_add_item">
        <div class="span_add_item_nome" style="font-weight:bold;font-size:14px;margin:5px 0px 15px 0px">span_add_item_nome</div>
        <div class="span_add_item_desc" style="margin:0px 0px 15px 0px"></div>
        <table cellspacing="0" cellpadding="0">
            <tr>
                <td style="white-space: nowrap;width:99%">
                    <div id="div_add_item_preco" style="font-weight:bold;margin:0px 0px 0px 0px">
                        {t}Valor unitário R${/t}<span id="span_add_item_preco_unitario"></span>
                    </div>
                </td>
                <td style="white-space: nowrap;width:1%">
                    <table cellspacing="0" cellpadding="0">
                        <tr>
                            <td>
                                <div class="div_sub_qtde" data-cp_fcall="Pedido.subQtdeCurrent"></div>
                            </td>
                            <td id='td_qtde_item_current' style='padding:0px 10px 0px 10px'>
                                1
                            </td>
                            <td>
                                <div class="div_add_qtde" data-cp_fcall="Pedido.addQtdeCurrent"></div>
                            </td>
                        </tr>
                    </table>

                </td>
            </tr>
        </table>
        <hr>
        <div id="div_add_item_total" style="text-align:right;font-size:18px">
            {t}Total{/t}: <span id="span_add_item_preco_total" class="preco"></span>
        </div>
        <div id="div_add_item_obs" style="padding-bottom:50px;margin-bottom:50px">
            <textarea id="textarea_obs_item" placeholder="{t}Observações{/t}"></textarea>
        </div>
        
        <div class="bottom_btn ui-btn ui-btn-a" data-cp_fcall="Pedido.addItemCurrent">
            {t}Adicionar ao carrinho{/t}
        </div>
    </div>
</div>
*/});//retirando a primeira e as ultimas duas linhas do corpo do comentario da funcao anonima para montar o html
PHTML = PHTML.toString();
PHTML = PHTML.substring(PHTML.indexOf("\n")+1);
PHTML = PHTML.substring(0, PHTML.lastIndexOf("\n"));
PHTML = PHTML.replace(/{t}(.*?){\/t}/g, function () {return __(arguments[1]);});
PAGES_HTML.page_add_item=PHTML

PHTML = (function() {/*
<div style="display:none" id="page_cart" data-role="page" data-control-title="Carrinho" data-theme="e">
    <div data-theme="a" data-role="header"  data-position="fixed"  data-tap-toggle="false"  class="remover_p_balcao">
        <h3>
            {t}Meu Pedido{/t}
        </h3>
        <button class="ui-btn ui-btn-left ui-icon-carat-l ui-btn-icon-notext" data-cp_fcall="NAV.back"></button>
    </div>
    <div class="ui-content" id="div_page_cart_content">
        {t}Tempo de entrega{/t} : <span id="span_cart_mins_entrega"></span>
        <div id="div_cart_itens"></div>
        <a class="ui-btn ui-btn-b ui-corner-all" data-cp_fcall="NAV.back(page_pedido)" style="margin-bottom:50px">
            {t}Adicionar Mais Itens{/t}
        </a>   
        <div class="bottom_btn ui-btn ui-btn-a" style="display:none" data-cp_fcall="Pedido.finalizar" id="a_pedido_finalizar">
            {t}Escolha Forma de Pagamento{/t}
        </div>
        <div class="ui-widget" id="span_pedido_minimo" style="display:none;font-style:italic">
            <div class="ui-state-highlight ui-corner-all" style="padding: 0 .7em;">
                <p style="text-align:right">
                    {t}O pedido mínimo é de R${/t} <span id="span_preco_pedido_minimo"></span>.
                </p>
            </div>
        </div>
    </div>
</div>
*/});//retirando a primeira e as ultimas duas linhas do corpo do comentario da funcao anonima para montar o html
PHTML = PHTML.toString();
PHTML = PHTML.substring(PHTML.indexOf("\n")+1);
PHTML = PHTML.substring(0, PHTML.lastIndexOf("\n"));
PHTML = PHTML.replace(/{t}(.*?){\/t}/g, function () {return __(arguments[1]);});
PAGES_HTML.page_cart=PHTML

PHTML = (function() {/*
<div style="display:none" id="page_complete_end" data-role="page" data-control-title="CompleteEndereço" data-theme="e">
    <div data-theme="a" data-role="header"  data-position="fixed"  data-tap-toggle="false" >
        <h3>
            {t}Complete o endereço{/t}
        </h3>
        <button class="ui-btn ui-btn-left ui-icon-carat-l ui-btn-icon-notext" data-cp_fcall="NAV.back"></button>
    </div>
    <div class="ui-content">
        <div id="cend_popup_detalhes"></div>
        <table style="margin-bottom:50px">
            <tr><td width="1%">{t}Número{/t}</td><td><input type="text" id="complete_end_numero" placeholder="Número"></td></tr>
            <tr><td width="1%">{t}Complemento{/t}</td><td><input type="text" id="complete_end_complemento" placeholder="Complemento"></td></tr>
            <tr><td width="1%">{t}Referência{/t}</td><td><input type="text" id="complete_end_referencia" placeholder="Referência"></td></tr>
        </table>
        <div class="bottom_btn ui-btn ui-btn-a remover_p_balcao" data-cp_fcall="Endereco.salvar()">
            {t}Salvar Endereço{/t}
        </div>
    </div>
</div>
*/});//retirando a primeira e as ultimas duas linhas do corpo do comentario da funcao anonima para montar o html
PHTML = PHTML.toString();
PHTML = PHTML.substring(PHTML.indexOf("\n")+1);
PHTML = PHTML.substring(0, PHTML.lastIndexOf("\n"));
PHTML = PHTML.replace(/{t}(.*?){\/t}/g, function () {return __(arguments[1]);});
PAGES_HTML.page_complete_end=PHTML

PHTML = (function() {/*
<div style="display:none" id="page_detalhes_pedido" data-role="page" data-control-title="Detalhes" data-theme="e">
    <div data-theme="a" data-role="header"  data-position="fixed"  data-tap-toggle="false" >
        <h3>
            {t}Detalhes do Pedido{/t}
        </h3>
        <button class="ui-btn ui-btn-left ui-icon-carat-l ui-btn-icon-notext" data-cp_fcall="NAV.back"></button>
    </div>
    <div class="ui-content" id="div_detalhes_pedido">
    </div>
</div>

*/});//retirando a primeira e as ultimas duas linhas do corpo do comentario da funcao anonima para montar o html
PHTML = PHTML.toString();
PHTML = PHTML.substring(PHTML.indexOf("\n")+1);
PHTML = PHTML.substring(0, PHTML.lastIndexOf("\n"));
PHTML = PHTML.replace(/{t}(.*?){\/t}/g, function () {return __(arguments[1]);});
PAGES_HTML.page_detalhes_pedido=PHTML

PHTML = (function() {/*
<div style="display:none" id="page_endereco" data-role="page" data-control-title="Endereco" data-theme="e">
    <div data-theme="a" data-role="header"  data-position="fixed"  data-tap-toggle="false"  class="remover_p_balcao">
        <h3>
            {t}Endereço de entrega{/t}
        </h3>
        <button class="ui-btn ui-btn-left ui-icon-carat-l ui-btn-icon-notext" data-cp_fcall="NAV.back"></button>
    </div>
    <div class="ui-content">
        <div id="div_list_ends" class="ui-content" style="margin-bottom:50px"></div>
        <div class="bottom_btn ui-btn ui-btn-a remover_p_balcao" data-cp_fcall="goto_page_add_end">
            {t}Adicionar Endereço{/t}
        </div>
    </div>
</div>
*/});//retirando a primeira e as ultimas duas linhas do corpo do comentario da funcao anonima para montar o html
PHTML = PHTML.toString();
PHTML = PHTML.substring(PHTML.indexOf("\n")+1);
PHTML = PHTML.substring(0, PHTML.lastIndexOf("\n"));
PHTML = PHTML.replace(/{t}(.*?){\/t}/g, function () {return __(arguments[1]);});
PAGES_HTML.page_endereco=PHTML

PHTML = (function() {/*
<div style="display:none" id="page_historico" data-role="page" data-control-title="Histórico" data-theme="e">
    <div data-theme="a" data-role="header"  data-position="fixed"  data-tap-toggle="false" >
        <h3>
            {t}Histórico de pedidos{/t}
        </h3>
        <button class="ui-btn ui-btn-left ui-icon-carat-l ui-btn-icon-notext" data-cp_fcall="NAV.back"></button>
    </div>
    <div class="ui-content" id="div_historico">
    </div>
</div>
*/});//retirando a primeira e as ultimas duas linhas do corpo do comentario da funcao anonima para montar o html
PHTML = PHTML.toString();
PHTML = PHTML.substring(PHTML.indexOf("\n")+1);
PHTML = PHTML.substring(0, PHTML.lastIndexOf("\n"));
PHTML = PHTML.replace(/{t}(.*?){\/t}/g, function () {return __(arguments[1]);});
PAGES_HTML.page_historico=PHTML

PHTML = (function() {/*
<div style="display:none" id="page_home" data-role="page" data-control-title="Home" data-theme="e">
    <div data-theme="a" data-role="header"  data-position="fixed"  data-tap-toggle="false" id="div_page_home_header">
        <h3>
            {t}Me Pediu{/t}
        </h3>
        <button class="ui-btn ui-btn-left ui-icon-bars ui-btn-icon-notext"></button>
    </div>
    <div class="ui-content" id="div_page_home_content" style="margin-bottom:50px">
        <div id="div_logo">
            <img id="logo_pizzaria">
            <div id="div_set_fav" style="position:relative;float:right" data-cp_fcall="toggle_fav">
            </div>
        </div>
        <BR>
        <a id="a_pedido" class="ui-btn ui-btn-a ui-corner-all" data-cp_fcall="goto_page_pedido()">
            {t}Realizar Pedido{/t}
        </a>   
        <div id="div_pedido_user_estab" class="ui-bar ui-bar-d ui-corner-all" style="display:none;margin-bottom:50px"></div>
        <div class="bottom_btn ui-btn ui-btn-a" data-cp_fcall="NAV.goto(page_promocoes)" style="display:none" id="home_promo_btn">
            <img data-img_src="imgs/icons/promo.png?v=1">
            {t}Confira nossas Promoções!{/t}
        </div>
    </div>
</div> 
*/});//retirando a primeira e as ultimas duas linhas do corpo do comentario da funcao anonima para montar o html
PHTML = PHTML.toString();
PHTML = PHTML.substring(PHTML.indexOf("\n")+1);
PHTML = PHTML.substring(0, PHTML.lastIndexOf("\n"));
PHTML = PHTML.replace(/{t}(.*?){\/t}/g, function () {return __(arguments[1]);});
PAGES_HTML.page_home=PHTML

PHTML = (function() {/*
<div style="display:none" id="page_lembrar_senha" data-role="page" data-control-title="LembrarSenha" data-theme="e">
    <div data-theme="a" data-role="header"  data-position="fixed"  data-tap-toggle="false" >
        <h3>
            {t}Lembrar minha senha{/t}
        </h3>
        <button class="ui-btn ui-btn-left ui-icon-carat-l ui-btn-icon-notext" data-cp_fcall="NAV.back"></button>
    </div>
    <div class="ui-content">
        {t}Deseja receber um email, ou um sms com sua senha?{/t}
        <a class="ui-btn ui-btn-b ui-corner-all" data-cp_fcall="goto_enviar_senha_sms">
            {t}Enviar minha senha por SMS{/t}
        </a>
        <a class="ui-btn ui-btn-b ui-corner-all" data-cp_fcall="goto_enviar_senha_email">
            {t}Enviar minha senha por email{/t}
        </a>
    </div>
</div>
*/});//retirando a primeira e as ultimas duas linhas do corpo do comentario da funcao anonima para montar o html
PHTML = PHTML.toString();
PHTML = PHTML.substring(PHTML.indexOf("\n")+1);
PHTML = PHTML.substring(0, PHTML.lastIndexOf("\n"));
PHTML = PHTML.replace(/{t}(.*?){\/t}/g, function () {return __(arguments[1]);});
PAGES_HTML.page_lembrar_senha=PHTML

PHTML = (function() {/*
<div style="display:none" id="page_lembrar_senha_email" data-role="page" data-control-title="LembrarSenha" data-theme="e">
    <div data-theme="a" data-role="header"  data-position="fixed"  data-tap-toggle="false" >
        <h3>
            {t}Lembrar senha por Email{/t}
        </h3>
        <button class="ui-btn ui-btn-left ui-icon-carat-l ui-btn-icon-notext" data-cp_fcall="NAV.back"></button>
    </div>
    <div class="ui-content">
        {t}Informe seu email{/t} : 
        <BR><BR>
        <input type="text" id="lembrar_email" placeholder="{t}E-mail{/t}" data-wrapper-class="ui-custom">
        <a class="ui-btn ui-btn-b ui-corner-all" data-cp_fcall="User.enviar_senha_email">
            {t}Enviar senha{/t}
        </a>
    </div>
</div>
*/});//retirando a primeira e as ultimas duas linhas do corpo do comentario da funcao anonima para montar o html
PHTML = PHTML.toString();
PHTML = PHTML.substring(PHTML.indexOf("\n")+1);
PHTML = PHTML.substring(0, PHTML.lastIndexOf("\n"));
PHTML = PHTML.replace(/{t}(.*?){\/t}/g, function () {return __(arguments[1]);});
PAGES_HTML.page_lembrar_senha_email=PHTML

PHTML = (function() {/*
<div style="display:none" id="page_lembrar_senha_sms" data-role="page" data-control-title="LembrarSenha" data-theme="e">
    <div data-theme="a" data-role="header"  data-position="fixed"  data-tap-toggle="false" >
        <h3>
            {t}Lembrar senha por SMS{/t}
        </h3>
        <button class="ui-btn ui-btn-left ui-icon-carat-l ui-btn-icon-notext" data-cp_fcall="NAV.back"></button>
    </div>
    <div class="ui-content">
        {t}Digite o número do seu telefone celular{/t}
        <BR><BR>
        <table cellspacing="0" cellpadding="0">
            <tr>
                <td width="20%">
                    <label for="input_nu_cel">{t}DDD{/t}</label>
                    <input type="number" id="lembrar_ddd" placeholder="{t}DDD{/t}" data-wrapper-class="ui-custom">
                </td>          
                <td>
                    <label for="input_nu_cel">{t}Telefone Celular{/t}</label>
                    <input type="number" id="lembrar_cel" placeholder="{t}Telefone Celular{/t}" data-wrapper-class="ui-custom">
                </td>          
            </tr>
        </table>
        <a class="ui-btn ui-btn-b ui-corner-all" data-cp_fcall="User.enviar_senha_sms">
            {t}Enviar senha{/t}
        </a>
    </div>
</div>
*/});//retirando a primeira e as ultimas duas linhas do corpo do comentario da funcao anonima para montar o html
PHTML = PHTML.toString();
PHTML = PHTML.substring(PHTML.indexOf("\n")+1);
PHTML = PHTML.substring(0, PHTML.lastIndexOf("\n"));
PHTML = PHTML.replace(/{t}(.*?){\/t}/g, function () {return __(arguments[1]);});
PAGES_HTML.page_lembrar_senha_sms=PHTML

PHTML = (function() {/*
<div style="display:none" id="page_login" data-role="page" data-control-title="Login" data-theme="e">
    <div data-theme="a" data-role="header"  data-position="fixed"  data-tap-toggle="false" >
        <h3>
            {t}Login do cliente{/t}
        </h3>
        <button class="ui-btn ui-btn-left ui-icon-carat-l ui-btn-icon-notext" data-cp_fcall="NAV.back"></button>
    </div>
    <div class="ui-content">
        {t}Por favor entre com seus dados de login{/t}
        <input type="text" id="input_email" placeholder="E-mail">
        <input type="text" id="input_senha" placeholder="Senha">
        <a class="ui-btn ui-btn-b ui-corner-all" data-cp_fcall="User.login">
            {t}Enviar{/t}
        </a>
        {t}Ainda não possui cadastro?{/t}
        <!--
        <a id="a_fb" class="ui-btn ui-btn-b ui-corner-all" data-cp_fcall="fb_login">
            {t}Entrar com facebook{/t}
        </a><div id="fb_status"></div>
        -->
        <a id="a_cadastrar" class="ui-btn ui-btn-b ui-corner-all" data-cp_fcall="NAV.goto(page_newuser)">
            {t}Cadastrar com email{/t}
        </a>
        <a class="ui-btn ui-btn-b ui-corner-all" data-cp_fcall="NAV.goto(page_lembrar_senha)">
            {t}Esqueci minha senha{/t}
        </a>
    </div>
</div>  
*/});//retirando a primeira e as ultimas duas linhas do corpo do comentario da funcao anonima para montar o html
PHTML = PHTML.toString();
PHTML = PHTML.substring(PHTML.indexOf("\n")+1);
PHTML = PHTML.substring(0, PHTML.lastIndexOf("\n"));
PHTML = PHTML.replace(/{t}(.*?){\/t}/g, function () {return __(arguments[1]);});
PAGES_HTML.page_login=PHTML

PHTML = (function() {/*
<div style="display:none" id="page_newuser" data-role="page" data-control-title="NovoCliente" data-theme="e">
    <div data-theme="a" data-role="header"  data-position="fixed"  data-tap-toggle="false" >
        <h3>
            {t}Cadastre-se{/t}
        </h3>
        <button class="ui-btn ui-btn-left ui-icon-carat-l ui-btn-icon-notext" data-cp_fcall="NAV.back"></button>
    </div>
    <div class="ui-content">
        <label for="input_nu_nome">{t}Nome{/t}</label>
        <input type="text" id="input_nu_nome" placeholder="{t}Nome{/t}" data-wrapper-class="ui-custom">
        <table cellspacing="0" cellpadding="0">
            <tr>
                <td width="15%">
                    <label for="input_nu_cel">{t}DDD{/t}</label>
                    <input type="number" id="input_nu_ddd" placeholder="{t}DDD{/t}" data-wrapper-class="ui-custom">
                </td>          
                <td>
                    <label for="input_nu_cel">{t}Telefone Celular{/t}</label>
                    <input type="number" id="input_nu_cel" placeholder="{t}Telefone Celular{/t}" data-wrapper-class="ui-custom">
                </td>          
            </tr>
        </table>
        <label for="input_nu_email">{t}E-mail{/t}</label>
        <input type="text" id="input_nu_email" placeholder="{t}E-mail{/t}" data-wrapper-class="ui-custom">
        <label for="input_nu_senha">{t}Senha{/t}</label>
        <input type="password" id="input_nu_senha" placeholder="{t}Senha{/t}" data-wrapper-class="ui-custom">
        <label for="input_nu_senha2">{t}Repetir a Senha{/t}</label>
        <input type="password" id="input_nu_senha2" placeholder="{t}Repetir a Senha{/t}" data-wrapper-class="ui-custom">  
        <a class="ui-btn ui-btn-b ui-corner-all" data-cp_fcall="User.newuser">
            {t}Confirmar cadastro{/t}
        </a>
    </div>
</div>
*/});//retirando a primeira e as ultimas duas linhas do corpo do comentario da funcao anonima para montar o html
PHTML = PHTML.toString();
PHTML = PHTML.substring(PHTML.indexOf("\n")+1);
PHTML = PHTML.substring(0, PHTML.lastIndexOf("\n"));
PHTML = PHTML.replace(/{t}(.*?){\/t}/g, function () {return __(arguments[1]);});
PAGES_HTML.page_newuser=PHTML

PHTML = (function() {/*
<div style="display:none" id="page_pagto" data-role="page" data-control-title="Pagamento" data-theme="e">
    <div data-theme="a" data-role="header"  data-position="fixed"  data-tap-toggle="false"  class="remover_p_balcao">
        <h3>
            {t}Pagamento{/t}
        </h3>
        <button class="ui-btn ui-btn-left ui-icon-carat-l ui-btn-icon-notext" data-cp_fcall="NAV.back"></button>
    </div>
    <div class="ui-content" id="div_content_page_pagto">
        <div style="padding-bottom: 25px">
            <ul data-role="listview" data-theme="c" data-divider-theme="c">
                <li data-role="list-divider" class="remover_p_balcao">
                    {t}Endereço de entrega{/t}
                </li>
                <li data-cp_fcall="NAV.goto(page_endereco)" class="remover_p_balcao">
                    <table width="100%">
                        <tbody>
                            <tr>
                                <td width="1%" style="text-align:left;min-width:35px">
                                    <img data-img_src="imgs/icons/switch.png">
                                </td>
                                <td id="div_end_entrega" width="99%">
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </li>
                <li data-role="list-divider">
                    {t}Opções adicionais{/t}
                </li>
                <li data-cp_fcall="Pedido.selCodPromo">
                    <table width="100%" cellspacing="0" cellpadding="0">
                        <tr>
                            <td width="1%" style="text-align:left;min-width:35px">
                                <input type="checkbox" class="cb_trigger_by_li" id="cb_voucher">
                            </td>
                            <td width="1%" style="text-align:left;min-width:35px;white-space:nowrap">
                                {t}Código promocional{/t}
                                <span id="codigo_voucher"></span>
                            </td>
                            <td width="97%" style="text-align:left;">
                            </td>
                        </tr>
                    </table>
                </li>
                <li data-cp_fcall="Pedido.selCPFnota">
                    <table width="100%" cellspacing="0" cellpadding="0">
                        <tr>
                            <td width="1%" style="text-align:left;min-width:35px">
                                <input type="checkbox" class="cb_trigger_by_li" id="cb_cpf_nota">
                            </td>
                            <td width="1%" style="text-align:left;min-width:35px;white-space:nowrap">
                                {t}CPF na nota{/t}
                                <span id="cpf_na_nota"></span>
                            </td>
                            <td width="97%" style="text-align:left;">
                            </td>
                        </tr>
                    </table>
                </li>
            </ul>
        </div>
        <span style="font-weight:bolder" class="remover_p_balcao">
            {t}Total do pedido{/t} : {t}R${/t} <span id="span_total_pedido_pagto"></span>
        </span>
        <div class="remover_p_balcao" style="padding:10px 0px 10px 0px">
            {t}Pagarei com{/t}
        </div>
        <div style="padding:10px 0px 10px 0px;margin:10px 0px 50px 0px;" id="div_formas_pagto"></div>
        <div class="bottom_btn ui-btn ui-btn-a remover_p_balcao" data-cp_fcall="Pedido.enviar">
            {t}Enviar pedido{/t}
        </div>
    </div>
</div>
*/});//retirando a primeira e as ultimas duas linhas do corpo do comentario da funcao anonima para montar o html
PHTML = PHTML.toString();
PHTML = PHTML.substring(PHTML.indexOf("\n")+1);
PHTML = PHTML.substring(0, PHTML.lastIndexOf("\n"));
PHTML = PHTML.replace(/{t}(.*?){\/t}/g, function () {return __(arguments[1]);});
PAGES_HTML.page_pagto=PHTML

PHTML = (function() {/*
<div style="display:none" id="page_pedido" data-role="page" data-control-title="Pedido" data-theme="e">
    <div data-theme="a" data-role="header"  data-position="fixed"  data-tap-toggle="false"  class="remover_p_balcao">
        <h3>
            {t}Cardápio{/t}
        </h3>
        <button class="ui-btn ui-btn-left ui-icon-carat-l ui-btn-icon-notext" data-cp_fcall="NAV.back"></button>
    </div>
    <div class="ui-content" id="div_page_pedido_content">
        <span class="remover_p_balcao">{t}Adicionar ao seu pedido{/t} : <BR></span>
        <div id="div_cardapios"></div>
        <div class="div_msg_pedido_add" id="msg_item_add">
            {t}Item adicionado ao pedido{/t}
        </div>
        <img class="cart" data-img_src="imgs/icons/cart64.png" style="display:none" id="cart" data-cp_fcall="NAV.goto(page_cart)">
        <img class="cart" data-img_src="imgs/icons/cart64off.png" style="display:" id="cart_off" data-cp_fcall="toast({t}Adicione itens ao seu pedido!{/t})">
    </div>
</div>
*/});//retirando a primeira e as ultimas duas linhas do corpo do comentario da funcao anonima para montar o html
PHTML = PHTML.toString();
PHTML = PHTML.substring(PHTML.indexOf("\n")+1);
PHTML = PHTML.substring(0, PHTML.lastIndexOf("\n"));
PHTML = PHTML.replace(/{t}(.*?){\/t}/g, function () {return __(arguments[1]);});
PAGES_HTML.page_pedido=PHTML

PHTML = (function() {/*
<div style="display:none" id="page_pizza" data-role="page" data-control-title="Pizza" data-theme="e">
    <div data-theme="a" data-role="header"  data-position="fixed"  data-tap-toggle="false" >
        <h3>
            {t}Pizza{/t}
        </h3>
        <button class="ui-btn ui-btn-left ui-icon-carat-l ui-btn-icon-notext" data-cp_fcall="NAV.back"></button>
    </div>
    <div class="ui-content" id="div_content_pizza">
        <div id="ph_tamanhos" style="display:inline-block"></div>
        <hr>
        <div style="display:inline-block">
            <div style="margin-left:10px;">{t}Quer uma pizza de quantos sabores?{/t}</div>
            <div class="div_pizza_option">
                <img class="img_pizza_option img_sabores_pizza" data-img_src="imgs/pizzas/big_1.png" data-num_sabores="1" data-cp_fcall="Pizza.setNumSabores(1)">
                <div style="text-align:center">{t}Inteira{/t}</div>
            </div>
            <div class="div_pizza_option">
                <img class="img_pizza_option img_sabores_pizza" data-img_src="imgs/pizzas/big_2.png" data-num_sabores="2" data-cp_fcall="Pizza.setNumSabores(2)">
                <div style="text-align:center">{t}Meio-a-meio{/t}</div>
            </div>
            <div class="div_pizza_option" id="div_3sabores">
                <img class="img_pizza_option img_sabores_pizza" data-img_src="imgs/pizzas/big_3.png" data-num_sabores="3" data-cp_fcall="Pizza.setNumSabores(3)">
                <div style="text-align:center">{t}3 sabores{/t}</div>
            </div>
        </div>
        <hr>
        <div style="display:inline-block">
            <a id="btn_sabor_1" class="ui-btn ui-btn-b ui-corner-all btn_sabor" style="display:none" data-num_sabor="1" data-cp_fcall="Pizza.gotoPageSabor(1)">
                {t}Escolha o 1° sabor{/t}
            </a>
            <a id="btn_sabor_2" class="ui-btn ui-btn-b ui-corner-all btn_sabor" style="display:none" data-num_sabor="2" data-cp_fcall="Pizza.gotoPageSabor(2)">
                {t}Escolha o 2° sabor{/t}
            </a>
            <a id="btn_sabor_3" class="ui-btn ui-btn-b ui-corner-all btn_sabor" style="display:none" data-num_sabor="3" data-cp_fcall="Pizza.gotoPageSabor(3)">
                {t}Escolha o 3° sabor{/t}
            </a>
        </div>
        <hr id="hr_massas" style="display:none">
        <div style="display:inline-block" id="ph_massas"></div>
        <hr id="hr_bordas_cortes">
        <table cellspacing="0" cellpadding="0" width="100%" id="table_bordas_cortes"><tr>
                <td style="vertical-align:top;" width="50%" id="td_bordas"><!-- table servindo como master container, se livrar qdo possivel -->

                    <table cellspacing="0" cellpadding="0" width="100%">
                        <tr>
                            <td colspan="2" style="text-align:center" id="tr_label_borda">
                                <div id="div_label_borda">
                                    {t}Escolha a borda{/t}
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td width="49%" style="vertical-align:top" id="td_opcao_1_borda">
                                <div class="div_pizza_option">
                                    <img class="img_pizza_option img_borda_pizza" data-img_src="imgs/pizzas/borda_normal.png" data-borda="normal" data-cp_fcall="Pizza.setBorda(normal)">
                                    <div style="text-align:center">{t}Normal{/t}</div>
                                </div>
                            </td>
                            <td width="49%" style="vertical-align:top" id="td_opcao_2_borda">
                                <div class="div_pizza_option">
                                    <img class="img_pizza_option img_borda_pizza" data-img_src="imgs/pizzas/borda_recheada.png" data-borda="recheada" data-cp_fcall="Pizza.setBorda(recheada)">
                                    <div style="text-align:center" id="div_nome_borda_recheada">{t}Recheada{/t}</div>
                                </div>
                            </td>
                            <td width="1%" id="td_blank_borda"></td>
                        </tr>
                    </table>
                </td>
                <td style="vertical-align:top;border-left:1px solid black" width="50%" id="td_cortes">

                    <table cellspacing="0" cellpadding="0" width="100%">
                        <tr>
                            <td colspan="2" style="text-align:center" id="tr_label_corte">
                                <div id="div_label_corte">
                                    {t}Escolha o Corte{/t}
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td width="49%" style="vertical-align:top" id="td_opcao_1_corte">
                                <div class="div_pizza_option">
                                    <img class="img_pizza_option img_corte_pizza" data-img_src="imgs/pedacos.png" data-corte="pedacos" data-cp_fcall="Pizza.setCorte(pedacos)">
                                    <div style="text-align:center">{t}Pedaços{/t}</div>
                                </div>
                            </td>
                            <td width="49%" style="vertical-align:top" id="td_opcao_2_corte">
                                <div class="div_pizza_option">
                                    <img class="img_pizza_option img_corte_pizza" data-img_src="imgs/aperitivo.png" data-corte="aperitivo" data-cp_fcall="Pizza.setCorte(aperitivo)">
                                    <div style="text-align:center">{t}Aperitivo{/t}</div>
                                </div>
                            </td>
                            <td width="1%" id="td_blank_corte"></td>
                        </tr>
                    </table>

                </td>
            </tr>
        </table>
        <hr>
        {t}Observações{/t} :
        <textarea id="pizza_obs" rows="3" cols="5" placeholder="Escreva aqui"></textarea>
        <hr>
        <div style="padding:5px;margin:5px;">
            <a id="btn_concluir_pizza" class="ui-btn ui-btn-b ui-corner-all btn_concluir_pizza" data-cp_fcall="Pizza.concluirPizza">
                {t}Concluir pizza{/t}
            </a>
        </div>
    </div>
</div>
<div style="display:none" id="page_sabor" data-role="page" data-control-title="sabor" data-theme="e">
    <img class="img_icon_voltar" data-img_src="imgs/icons/ss_back_off.png" data-cp_fcall="NAV.back">
    {t}Sabor{/t}
    <hr>
</div>
<div style="display:none" id="page_bordas" data-role="page" data-control-title="borda" data-theme="e">
    <img class="img_icon_voltar" data-img_src="imgs/icons/ss_back_off.png" data-cp_fcall="NAV.back">
    {t}Borda{/t}
    <hr>
    <div class="ui-content" id="div_page_bordas_content">
        {t}Escolha o recheio da borda{/t} : 
        <p>
    </div>
</div>
*/});//retirando a primeira e as ultimas duas linhas do corpo do comentario da funcao anonima para montar o html
PHTML = PHTML.toString();
PHTML = PHTML.substring(PHTML.indexOf("\n")+1);
PHTML = PHTML.substring(0, PHTML.lastIndexOf("\n"));
PHTML = PHTML.replace(/{t}(.*?){\/t}/g, function () {return __(arguments[1]);});
PAGES_HTML.page_pizza=PHTML

PHTML = (function() {/*
<div style="display:none" id="page_promocoes" data-role="page" data-control-title="Histórico" data-theme="e">
    <div data-theme="a" data-role="header"  data-position="fixed"  data-tap-toggle="false" >
        <h3>
            {t}Promoções{/t}
        </h3>
        <button class="ui-btn ui-btn-left ui-icon-carat-l ui-btn-icon-notext" data-cp_fcall="NAV.back"></button>
    </div>
    <div class="ui-content" id="div_promocoes">
    </div>
</div>
*/});//retirando a primeira e as ultimas duas linhas do corpo do comentario da funcao anonima para montar o html
PHTML = PHTML.toString();
PHTML = PHTML.substring(PHTML.indexOf("\n")+1);
PHTML = PHTML.substring(0, PHTML.lastIndexOf("\n"));
PHTML = PHTML.replace(/{t}(.*?){\/t}/g, function () {return __(arguments[1]);});
PAGES_HTML.page_promocoes=PHTML

PHTML = (function() {/*
<div style="display:none" id="page_sel_search_origin" data-role="page" data-control-title="SelSearchOrigin" data-theme="e">
    <div data-theme="a" data-role="header"  data-position="fixed"  data-tap-toggle="false"  class="remover_p_balcao">
        <h3>
            {t}Selecione local de busca{/t}
        </h3>
        <button class="ui-btn ui-btn-left ui-icon-carat-l ui-btn-icon-notext" data-cp_fcall="NAV.back"></button>
    </div>
    <div class="ui-content">
        <div class="ui-btn ui-btn-a remover_p_balcao" data-cp_fcall="setSearchEstabOrigin()">
            {t}Estabelecimentos perto de mim{/t}
        </div>
        <div class="ui-btn ui-btn-a remover_p_balcao" data-cp_fcall="setSearchEstabOrigin(add)">
            {t}Adicionar endereço para pesquisa{/t}
        </div>
        <h3 id="h3_title_origin_ends">
            {t}Últimos endereços utilizados{/t} :
        </h3>
        <div id="div_search_origin_list_ends" style="margin-bottom:50px"></div>
    </div>
</div>

*/});//retirando a primeira e as ultimas duas linhas do corpo do comentario da funcao anonima para montar o html
PHTML = PHTML.toString();
PHTML = PHTML.substring(PHTML.indexOf("\n")+1);
PHTML = PHTML.substring(0, PHTML.lastIndexOf("\n"));
PHTML = PHTML.replace(/{t}(.*?){\/t}/g, function () {return __(arguments[1]);});
PAGES_HTML.page_sel_search_origin=PHTML