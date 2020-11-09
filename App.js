'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Nav_Menu = function (_React$Component) {
    _inherits(Nav_Menu, _React$Component);

    function Nav_Menu(props) {
        _classCallCheck(this, Nav_Menu);

        var _this = _possibleConstructorReturn(this, (Nav_Menu.__proto__ || Object.getPrototypeOf(Nav_Menu)).call(this, props));

        _this.state = { active: "Start" };
        return _this;
    }

    _createClass(Nav_Menu, [{
        key: 'render',
        value: function render() {
            var active = this.props.active;


            try {
                switch (active) {

                    case 'Start':
                        return React.createElement(
                            'ul',
                            { className: 'navbar-nav' },
                            React.createElement(
                                'li',
                                { onClick: this.props.startclick, className: 'navbar-brand text-white' },
                                'Start'
                            ),
                            React.createElement(
                                'li',
                                { onClick: this.props.itemclick, className: 'navbar-brand text-white-50' },
                                'Projekty'
                            ),
                            React.createElement(
                                'li',
                                { onClick: this.props.umiejetnosciclick, className: 'navbar-brand text-white-50' },
                                'Umiej\u0119tno\u015Bci'
                            ),
                            React.createElement(
                                'li',
                                { onClick: this.props.ofertaclick, className: 'navbar-brand text-white-50' },
                                'Oferta'
                            )
                        );
                        break;
                    case 'Projekty':
                        return React.createElement(
                            'ul',
                            { className: 'navbar-nav' },
                            React.createElement(
                                'li',
                                { onClick: this.props.startclick, className: 'navbar-brand text-white-50' },
                                'Start'
                            ),
                            React.createElement(
                                'li',
                                { onClick: this.props.itemclick, className: 'navbar-brand text-white' },
                                'Projekty'
                            ),
                            React.createElement(
                                'li',
                                { onClick: this.props.umiejetnosciclick, className: 'navbar-brand text-white-50' },
                                'Umiej\u0119tno\u015Bci'
                            ),
                            React.createElement(
                                'li',
                                { onClick: this.props.ofertaclick, className: 'navbar-brand text-white-50' },
                                'Oferta'
                            )
                        );
                        break;
                    case 'Umiejętności':
                        return React.createElement(
                            'ul',
                            { className: 'navbar-nav' },
                            React.createElement(
                                'li',
                                { onClick: this.props.startclick, className: 'navbar-brand text-white-50' },
                                'Start'
                            ),
                            React.createElement(
                                'li',
                                { onClick: this.props.itemclick, className: 'navbar-brand text-white-50' },
                                'Projekty'
                            ),
                            React.createElement(
                                'li',
                                { onClick: this.props.umiejetnosciclick, className: 'navbar-brand text-white' },
                                'Umiej\u0119tno\u015Bci'
                            ),
                            React.createElement(
                                'li',
                                { onClick: this.props.ofertaclick, className: 'navbar-brand text-white-50' },
                                'Oferta'
                            )
                        );
                        break;
                    case 'Oferta':
                        return React.createElement(
                            'ul',
                            { className: 'navbar-nav' },
                            React.createElement(
                                'li',
                                { onClick: this.props.startclick, className: 'navbar-brand text-white-50' },
                                'Start'
                            ),
                            React.createElement(
                                'li',
                                { onClick: this.props.itemclick, className: 'navbar-brand text-white-50' },
                                'Projekty'
                            ),
                            React.createElement(
                                'li',
                                { onClick: this.props.umiejetnosciclick, className: 'navbar-brand text-white-50' },
                                'Umiej\u0119tno\u015Bci'
                            ),
                            React.createElement(
                                'li',
                                { onClick: this.props.ofertaclick, className: 'navbar-brand text-white' },
                                'Oferta'
                            )
                        );
                        break;
                    default:
                        console.log("Mam nadzieję, że warto się uczyć Reacta");
                }
            } catch (error) {
                console.log("Wystąpił błąd");
            }
        }
    }]);

    return Nav_Menu;
}(React.Component);

var Oferta = function (_React$Component2) {
    _inherits(Oferta, _React$Component2);

    function Oferta(props) {
        _classCallCheck(this, Oferta);

        var _this2 = _possibleConstructorReturn(this, (Oferta.__proto__ || Object.getPrototypeOf(Oferta)).call(this, props));

        _this2.clickAddMWh = function () {
            _this2.setState({ Mwh: _this2.inputValue, total: _this2.inputValue1 * 200 + _this2.inputValue * 30 });console.log(_this2.Mwh);
        };

        _this2.clickAddMWd = function () {
            _this2.setState({ Mwd: _this2.inputValue1, total: _this2.inputValue1 * 200 + _this2.inputValue * 30 });console.log(_this2.Mwd);
        };

        _this2.ClearOrder = function () {
            _this2.setState({ Mwh: 0, Mwd: 0, total: 0 });
        };

        _this2.OnChangeInput = function (e) {
            _this2.inputValue = e.target.value;console.log(e.target.value);console.log(_this2.inputValue);
        };

        _this2.OnChangeInput1 = function (e) {
            _this2.inputValue1 = e.target.value;console.log(e.target.value);console.log(_this2.inputValue1);
        };

        _this2.state = { total: 0, Mwh: 0, Mwd: 0, inputValue: 0, inputValue1: 0 };

        console.log(isNaN(_this2.total));
        return _this2;
    }

    _createClass(Oferta, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'section',
                { id: 'Oferta' },
                React.createElement(
                    'div',
                    null,
                    React.createElement(
                        'h1',
                        { style: { whiteSpace: "nowrap", overflow: "hidden" } },
                        '          Oferta ',
                        React.createElement(
                            'span',
                            { className: 'badge badge-success' },
                            'NOWO\u015A\u0106   '
                        ),
                        'Oferta ',
                        React.createElement(
                            'span',
                            { className: 'badge badge-success' },
                            'NOWO\u015A\u0106   '
                        ),
                        'Oferta ',
                        React.createElement(
                            'span',
                            { className: 'badge badge-success' },
                            'NOWO\u015A\u0106    '
                        ),
                        'Oferta ',
                        React.createElement(
                            'span',
                            { className: 'badge badge-success' },
                            'NOWO\u015A\u0106    '
                        ),
                        'Oferta ',
                        React.createElement(
                            'span',
                            { className: 'badge badge-success' },
                            'NOWO\u015A\u0106    '
                        ),
                        'Oferta ',
                        React.createElement(
                            'span',
                            { className: 'badge badge-success' },
                            'NOWO\u015A\u0106   '
                        ),
                        'Oferta ',
                        React.createElement(
                            'span',
                            { className: 'badge badge-success' },
                            'NOWO\u015A\u0106   '
                        )
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'jumbotron-fluid container container-fluid my-4' },
                    React.createElement(
                        'div',
                        { className: 'row' },
                        React.createElement(
                            'div',
                            { className: 'col-sm-3' },
                            React.createElement(
                                'div',
                                { className: 'card promo1', style: { width: "18rem" } },
                                React.createElement(
                                    'div',
                                    { className: 'mt-2 mx-5' },
                                    React.createElement('img', { src: './img/wall-clock.svg', className: 'card-img-top', style: { height: " 10vw" }, alt: '1 godzina' })
                                ),
                                React.createElement(
                                    'div',
                                    { className: 'card-body' },
                                    React.createElement(
                                        'h5',
                                        { className: 'card-title' },
                                        'Jedna roboczogodzina mojej pracy nad Twoim projektem'
                                    ),
                                    React.createElement('p', { className: 'card-text' }),
                                    React.createElement(
                                        'form',
                                        null,
                                        React.createElement(
                                            'div',
                                            { className: 'form-group' },
                                            React.createElement(
                                                'label',
                                                { 'for': 'exampleInputEmail1' },
                                                'Liczba roboczogodzin:'
                                            ),
                                            React.createElement('input', { type: 'number', className: 'form-control', onChange: this.OnChangeInput, placeholder: '1' }),
                                            React.createElement(
                                                'small',
                                                { id: 'emailHelp', className: 'form-text text-muted' },
                                                'Wpisz liczb\u0119 roboczogodzin'
                                            ),
                                            React.createElement(
                                                'button',
                                                { onClick: this.clickAddMWh, type: 'button', className: ' btn btn-info my-1' },
                                                'Dodaj do koszyka'
                                            )
                                        )
                                    )
                                )
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'col-sm-3' },
                            React.createElement(
                                'div',
                                { className: 'card promo2', style: { width: "18rem" } },
                                React.createElement(
                                    'div',
                                    { className: 'mt-2 mx-5' },
                                    React.createElement('img', { src: './img/schedule.svg', className: 'card-img-top', style: { height: "10vw" }, alt: '1 dzie\u0144' })
                                ),
                                React.createElement(
                                    'div',
                                    { className: 'card-body' },
                                    React.createElement(
                                        'h5',
                                        { className: 'card-title' },
                                        'Jeden ca\u0142y dzie\u0144 roboczy mojej pracy nad Twoim projektem '
                                    ),
                                    React.createElement('p', { className: 'card-text' }),
                                    React.createElement(
                                        'form',
                                        null,
                                        React.createElement(
                                            'div',
                                            { className: 'form-group' },
                                            React.createElement(
                                                'label',
                                                { 'for': 'exampleInputEmail1' },
                                                'Liczba dni roboczych:'
                                            ),
                                            React.createElement('input', { type: 'number', onChange: this.OnChangeInput1, className: 'form-control', placeholder: '1' }),
                                            React.createElement(
                                                'small',
                                                { id: 'emailHelp', className: 'form-text text-muted' },
                                                'Wpisz liczb\u0119 dni roboczych'
                                            ),
                                            React.createElement(
                                                'button',
                                                { onClick: this.clickAddMWd, type: 'button', className: ' btn btn-info my-1' },
                                                'Dodaj do koszyka'
                                            )
                                        )
                                    )
                                )
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'col-sm-3' },
                            React.createElement(
                                'div',
                                { className: 'card ', style: { width: "18rem" } },
                                React.createElement(
                                    'div',
                                    { className: 'mt-2 mx-5' },
                                    React.createElement('img', { src: './img/WholeOrder.svg', className: 'card-img-top', style: { height: "10vw" }, alt: 'zlecenie' })
                                ),
                                React.createElement(
                                    'div',
                                    { className: 'card-body' },
                                    React.createElement(
                                        'h5',
                                        { className: 'card-title' },
                                        'Zlecenie'
                                    ),
                                    React.createElement(
                                        'p',
                                        { className: 'card-text' },
                                        ' Mo\u017Cesz z\u0142o\u017Cy\u0107 ca\u0142e zlecenie lub powierzy\u0107 fragmenty swojego projektu do kompleksowej realizacji.',
                                        React.createElement('br', null),
                                        ' Sprawd\u017A jak si\u0119 ze mn\u0105 pracuje - przy\u015Blij mi zadanie sprawdzaj\u0105ce.'
                                    ),
                                    React.createElement(
                                        'button',
                                        { type: 'button', className: ' btn btn-success my-1', 'data-toggle': 'modal', 'data-target': '#exampleModal' },
                                        'Kontakt'
                                    )
                                )
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'col-sm-3' },
                            React.createElement(
                                'div',
                                { className: 'card', style: { width: "18rem" } },
                                React.createElement(
                                    'div',
                                    { className: 'mt-2 mx-5 mb-1' },
                                    React.createElement('img', { src: './img/shopping-cart.svg', className: 'card-img-top', style: { height: "10vw" }, alt: 'koszyk' })
                                ),
                                React.createElement(
                                    'div',
                                    { className: 'card-body' },
                                    React.createElement(
                                        'h5',
                                        { className: 'card-title' },
                                        'Koszyk '
                                    ),
                                    React.createElement(
                                        'p',
                                        { className: 'card-text' },
                                        'Razem do zap\u0142aty: ',
                                        this.state.total + ' zł'
                                    ),
                                    React.createElement(
                                        'p',
                                        { className: 'card-text', alt: 'Man-working-days', title: 'Man-working-days' },
                                        'Liczba dni roboczych: ',
                                        this.state.Mwd + ' Mwd'
                                    ),
                                    React.createElement(
                                        'p',
                                        { className: 'card-text', alt: 'Man-working-hours', title: 'Man-working-hours' },
                                        'Liczba godzin roboczych: ',
                                        this.state.Mwh + ' Mwh'
                                    ),
                                    React.createElement(
                                        'form',
                                        null,
                                        React.createElement(
                                            'div',
                                            { className: 'form-group' },
                                            React.createElement(
                                                'small',
                                                { id: 'emailHelp', className: 'form-text text-muted' },
                                                'Zacznij zakupy od pocz\u0105tku'
                                            ),
                                            React.createElement(
                                                'button',
                                                { onClick: this.ClearOrder, type: 'button', className: 'btn btn-info my-1' },
                                                'Opr\xF3\u017Cnij koszyk'
                                            ),
                                            React.createElement('div', { id: 'paypal-button-container' })
                                        )
                                    )
                                )
                            )
                        )
                    ),
                    React.createElement('div', { className: 'row' })
                )
            );
        }
    }]);

    return Oferta;
}(React.Component);

var Content = function (_React$Component3) {
    _inherits(Content, _React$Component3);

    function Content(props) {
        _classCallCheck(this, Content);

        return _possibleConstructorReturn(this, (Content.__proto__ || Object.getPrototypeOf(Content)).call(this, props));
    }

    _createClass(Content, [{
        key: 'render',
        value: function render() {
            var active = this.props.active;

            try {
                switch (active) {

                    case 'Start':
                        return React.createElement(
                            'section',
                            { id: 'intro', style: { position: "relative" } },
                            React.createElement(
                                'div',
                                { id: 'demo', className: 'col-sm-12 carousel slide', 'data-ride': 'carousel' },
                                React.createElement(
                                    'ul',
                                    { className: 'carousel-indicators' },
                                    React.createElement('li', { 'data-target': '#demo', 'data-slide-to': '0', className: 'active' }),
                                    React.createElement('li', { 'data-target': '#demo', 'data-slide-to': '1' })
                                ),
                                React.createElement(
                                    'div',
                                    { className: ' carousel-inner', style: { height: "98vh", backgroundImage: "url('./img/tree.jpg')", backgroundSize: "cover" } },
                                    React.createElement(
                                        'div',
                                        { className: ' row carousel-item active' },
                                        React.createElement('img', { src: './img/usmiechniety.png', style: { height: "600px" }, className: 'rounded', alt: 'usmiechniety' })
                                    ),
                                    React.createElement(
                                        'div',
                                        { className: 'row carousel-item' },
                                        React.createElement('img', { src: './img/powazny.png', className: 'rounded', style: { height: "600px" }, alt: 'powazny' })
                                    )
                                ),
                                React.createElement(
                                    'a',
                                    { className: 'carousel-control-prev', href: '#demo', 'data-slide': 'prev' },
                                    React.createElement('span', { className: 'carousel-control-prev-icon' })
                                ),
                                React.createElement(
                                    'a',
                                    { className: 'carousel-control-next', href: '#demo', 'data-slide': 'next' },
                                    React.createElement('span', { className: 'carousel-control-next-icon' })
                                )
                            ),
                            React.createElement(
                                'div',
                                { className: 'lead p-3 mr-5' },
                                React.createElement(
                                    'span',
                                    null,
                                    React.createElement(
                                        'i',
                                        null,
                                        React.createElement(
                                            'q',
                                            null,
                                            'Nawet z pozoru najdziwaczniejsza, najskromniejsza pasja jest czym\u015B bardzo, ale to bardzo cennym. '
                                        )
                                    ),
                                    React.createElement('br', null),
                                    React.createElement(
                                        'span',
                                        { className: 'blockquote' },
                                        React.createElement(
                                            'b',
                                            null,
                                            React.createElement(
                                                'cite',
                                                null,
                                                '- Stephen King '
                                            )
                                        )
                                    ),
                                    ' '
                                ),
                                React.createElement(
                                    'div',
                                    null,
                                    React.createElement(
                                        'button',
                                        { type: 'button', className: ' btn btn-success', 'data-toggle': 'modal', 'data-target': '#exampleModal' },
                                        'Kontakt'
                                    ),
                                    React.createElement(
                                        'button',
                                        { onClick: this.props.itemclick, type: 'button', className: ' btn btn-info' },
                                        'Projekty'
                                    )
                                )
                            )
                        );

                        break;
                    case 'Projekty':
                        return React.createElement(
                            'section',
                            { id: 'projekty' },
                            React.createElement(
                                'div',
                                { className: 'contant parallax my-3', style: {

                                        backgroundImage: "url('./img/screenshot.png')",

                                        backgroundAttachment: "fixed",
                                        backgroundPosition: "center",
                                        backgroundRepeat: "repeat",
                                        backgroundSize: "cover"
                                    } },
                                React.createElement(
                                    'div',
                                    { className: 'container text-white' },
                                    React.createElement(
                                        'div',
                                        { className: 'row' },
                                        React.createElement(
                                            'h2',
                                            { className: 'mx-auto ' },
                                            'Projekty'
                                        )
                                    ),
                                    React.createElement(
                                        'div',
                                        { className: ' ' },
                                        React.createElement(LikeButton, null)
                                    ),
                                    React.createElement(
                                        'div',
                                        { className: 'hexagony' },
                                        React.createElement(
                                            'article',
                                            { className: 'article1 ' },
                                            React.createElement(
                                                'figure',
                                                null,
                                                React.createElement(
                                                    'a',
                                                    { href: '#', style: { textDecoration: "none", color: "white" } },
                                                    React.createElement(
                                                        'h2',
                                                        null,
                                                        React.createElement('br', null),
                                                        'Kobuszewski.com',
                                                        React.createElement('br', null)
                                                    ),
                                                    React.createElement(
                                                        'p',
                                                        null,
                                                        'Strona powsta\u0142a podczas pandemii COVID19 w celu praktycznego zapoznania si\u0119 z frameworkiem Bootstrap 4 oraz React.'
                                                    )
                                                )
                                            ),
                                            React.createElement('img', { src: './img/react.png', alt: 'react', title: 'react', height: '3vw' })
                                        ),
                                        React.createElement(
                                            'article',
                                            { className: 'article2' },
                                            React.createElement(
                                                'figure',
                                                null,
                                                React.createElement(
                                                    'a',
                                                    { href: 'https://github.com/AndrzejKobuszewski/NT4.git', target: 'blanc', style: { textDecoration: "none", color: "white" } },
                                                    React.createElement(
                                                        'h2',
                                                        null,
                                                        'Nap\u0119dzamy Polsk\u0119 4.0'
                                                    ),
                                                    React.createElement(
                                                        'p',
                                                        null,
                                                        'Projekt strony inicjatywy, kt\xF3rej celem jest wprowadzenie zarz\u0105dzania mobilno\u015Bci\u0105 w Polsce.'
                                                    )
                                                )
                                            ),
                                            React.createElement('img', { src: './img/phpmysql.jpeg', alt: 'php, mysql', title: 'php, mysql', height: '40px' })
                                        ),
                                        React.createElement(
                                            'article',
                                            { className: 'article0' },
                                            React.createElement(
                                                'figure',
                                                null,
                                                React.createElement(
                                                    'h2',
                                                    null,
                                                    'Projekty zrealizowane przeze mnie w ostatnich latach'
                                                ),
                                                React.createElement('p', null)
                                            )
                                        ),
                                        React.createElement(
                                            'article',
                                            { className: 'article3' },
                                            React.createElement(
                                                'figure',
                                                null,
                                                React.createElement(
                                                    'h2',
                                                    null,
                                                    'Tourfast.pl'
                                                ),
                                                React.createElement(
                                                    'a',
                                                    { href: 'http://www.tourfast.pl', target: 'blanc', style: { textDecoration: "none", color: "white" } },
                                                    React.createElement(
                                                        'p',
                                                        null,
                                                        'Strona zrealizowana dla start-upu, oferuj\u0105cego szybkie zwiedzanie miasta sto\u0142ecznego Warszawy.'
                                                    )
                                                )
                                            ),
                                            React.createElement('img', { alt: true, src: './img/logo-elementor.png' })
                                        ),
                                        React.createElement(
                                            'article',
                                            { className: 'article4' },
                                            React.createElement(
                                                'figure',
                                                null,
                                                React.createElement(
                                                    'h2',
                                                    null,
                                                    'Coders Lab'
                                                ),
                                                React.createElement(
                                                    'p',
                                                    null,
                                                    'Coders Lab to szko\u0142a programowania. Zaj\u0119cia prowadzone by\u0142y w trybie dziennym w formie intensywnego bootcampu przez 2 miesi\u0105ce.'
                                                )
                                            ),
                                            React.createElement('img', { alt: true, src: './img/ajax-logo.jpg' })
                                        ),
                                        React.createElement(
                                            'article',
                                            { className: 'article5' },
                                            React.createElement(
                                                'figure',
                                                null,
                                                React.createElement(
                                                    'h2',
                                                    null,
                                                    'Sie\u0107 Wewn\u0119trzna'
                                                ),
                                                React.createElement(
                                                    'p',
                                                    null,
                                                    'Sie\u0107 wewn\u0119trzna to codzienne czynno\u015Bci zwi\u0105zane z administracj\u0105 urz\u0105dzeniami domowymi.'
                                                )
                                            ),
                                            React.createElement('img', { alt: true, src: './img/ubuntu-logo.jpg' })
                                        ),
                                        React.createElement(
                                            'article',
                                            { className: 'article6' },
                                            React.createElement(
                                                'figure',
                                                null,
                                                React.createElement(
                                                    'h2',
                                                    null,
                                                    'IT Service Management'
                                                ),
                                                React.createElement(
                                                    'p',
                                                    null,
                                                    'Zarz\u0105dzanie us\u0142ugami IT w transporcie towarzywszy mi przez ca\u0142e \u017Cycie zawodowe.'
                                                )
                                            ),
                                            React.createElement('img', { alt: true, src: './img/DevOps-logo.png' })
                                        )
                                    )
                                ),
                                React.createElement(
                                    'div',
                                    null,
                                    React.createElement(
                                        'p',
                                        { id: 'OpisProjektowTabela', style: { backgroundColor: "grey" }, className: 'text-white' },
                                        'Poni\u017Csza tabela stanowi wykaz moich projekt\xF3w zrealizowanych w ostatnich latach. Projektom zosta\u0142y nadane nazwy robocze wraz z podaniem nazw wykorzystanych technologii. W tabeli znajduj\u0105 si\u0119 odno\u015Bniki do repozytari\xF3w na github lub do opublikowanych witryn.'
                                    ),
                                    React.createElement(
                                        'table',
                                        { className: 'table table-dark table-hover' },
                                        React.createElement(
                                            'thead',
                                            null,
                                            React.createElement(
                                                'tr',
                                                null,
                                                React.createElement(
                                                    'th',
                                                    null,
                                                    'Projekt'
                                                ),
                                                React.createElement(
                                                    'th',
                                                    null,
                                                    'Technologia'
                                                ),
                                                React.createElement(
                                                    'th',
                                                    null,
                                                    'Opis'
                                                ),
                                                React.createElement(
                                                    'th',
                                                    null,
                                                    'Link'
                                                )
                                            )
                                        ),
                                        React.createElement(
                                            'tbody',
                                            null,
                                            React.createElement(
                                                'tr',
                                                null,
                                                React.createElement(
                                                    'td',
                                                    null,
                                                    'Kobuszewski.com'
                                                ),
                                                React.createElement(
                                                    'td',
                                                    null,
                                                    React.createElement('img', { src: 'http://w3widgets.com/responsive-slider/img/html5.png', alt: 'HTML', title: 'HTML', height: '40px' }),
                                                    React.createElement('img', { src: 'http://w3widgets.com/responsive-slider/img/css3.png', alt: 'css', title: 'css', height: '40px' }),
                                                    React.createElement('img', { src: 'https://michel.dumont.io/mdgFront/uploads/post/19/logo_javascript-small.png', alt: 'js', title: 'js', height: '40px' }),
                                                    React.createElement('img', { src: './img/bootstrap4.jpg', alt: 'bootstrap4', title: 'bootstrap4', height: '40px' }),
                                                    React.createElement('img', { src: './img/react.png', alt: 'react', title: 'react', height: '40px' })
                                                ),
                                                React.createElement(
                                                    'td',
                                                    null,
                                                    React.createElement(
                                                        'button',
                                                        { type: 'button', className: 'btn btn-primary', 'data-toggle': 'collapse', 'data-target': '#opisKobuszewski' },
                                                        'Opis Projektu'
                                                    )
                                                ),
                                                React.createElement(
                                                    'td',
                                                    null,
                                                    React.createElement(
                                                        'a',
                                                        { href: 'https://github.com/AndrzejKobuszewski/AndrzejKobuszewski.git', target: 'blanc' },
                                                        React.createElement('img', { src: './img/gitLogo.jpg', alt: 'github', title: 'github', height: '40px' })
                                                    )
                                                )
                                            ),
                                            React.createElement(
                                                'tr',
                                                { id: 'opisKobuszewski', className: 'collapse' },
                                                React.createElement('td', null),
                                                React.createElement(
                                                    'td',
                                                    { colspan: '4' },
                                                    'Opis projektu "Kobuszewski.com":',
                                                    React.createElement('br', null),
                                                    'Strona powsta\u0142a podczas pandemii COVID19 w celu praktycznego zapoznania si\u0119 z frameworkiem Bootstrap 4 oraz bibliotek\u0105 React.'
                                                )
                                            ),
                                            React.createElement(
                                                'tr',
                                                null,
                                                React.createElement(
                                                    'td',
                                                    null,
                                                    'Nap\u0119dzamy Transport 4.0'
                                                ),
                                                React.createElement(
                                                    'td',
                                                    null,
                                                    React.createElement('img', { src: 'http://w3widgets.com/responsive-slider/img/html5.png', alt: 'HTML', title: 'HTML', height: '40px' }),
                                                    React.createElement('img', { src: 'http://w3widgets.com/responsive-slider/img/css3.png', alt: 'css', title: 'css', height: '40px' }),
                                                    React.createElement('img', { src: 'https://michel.dumont.io/mdgFront/uploads/post/19/logo_javascript-small.png', alt: 'js', title: 'js', height: '40px' }),
                                                    React.createElement('img', { src: './img/phpmysql.jpeg', alt: 'php, mysql', title: 'php, mysql', height: '40px' }),
                                                    React.createElement('img', { src: './img/mariadb.jpg', alt: 'mariadb logo', title: 'mariadb logo', height: '40px' }),
                                                    React.createElement('img', { src: './img/SassGulp_logo.png', alt: 'Sass Gulp logo', title: 'Sass Gulp logo', height: '40px' }),
                                                    React.createElement('img', { src: './img/wordpress-logo.png', alt: 'wordpress', title: 'wordpress', height: '40px' }),
                                                    React.createElement('img', { src: './img/ytApi.png', alt: 'youtubeapi', title: 'youtube api', height: '40px' }),
                                                    React.createElement('img', { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRre2hbPNrjdZNQgXjRmf3sTv6R9oCYxUawL39KAx5PJX4DS6gW', alt: 'mailing', title: 'mailing', height: '40px' }),
                                                    React.createElement('img', { src: './img/rss.png', alt: 'rss logo', title: 'rss logo', height: '40px' })
                                                ),
                                                React.createElement(
                                                    'td',
                                                    null,
                                                    React.createElement(
                                                        'button',
                                                        { type: 'button', className: 'btn btn-primary', 'data-toggle': 'collapse', 'data-target': '#opisNT' },
                                                        'Opis Projektu'
                                                    )
                                                ),
                                                React.createElement(
                                                    'td',
                                                    null,
                                                    React.createElement(
                                                        'a',
                                                        { href: 'https://github.com/AndrzejKobuszewski/NT4.git', target: 'blanc' },
                                                        React.createElement('img', { src: './img/gitLogo.jpg', alt: 'github', title: 'github', height: '40px' })
                                                    )
                                                )
                                            ),
                                            React.createElement(
                                                'tr',
                                                { id: 'opisNT', className: 'collapse' },
                                                React.createElement('td', null),
                                                React.createElement(
                                                    'td',
                                                    { colspan: '4' },
                                                    'Opis projektu "Nap\u0119dzamy Transport 4.0":',
                                                    React.createElement('br', null),
                                                    'Projekt strony inicjatywy, kt\xF3rej celem jest wprowadzenie zarz\u0105dzania mobilno\u015Bci\u0105 w Polsce opartej na wsp\xF3\u0142pracy \u015Brdowisk kszta\u0142tuj\u0105cych mobilno\u015B\u0107 przy wiod\u0105cej roli spo\u0142eczno\u015Bci korzytaj\u0105cej systemu transportowego.'
                                                )
                                            ),
                                            React.createElement(
                                                'tr',
                                                null,
                                                React.createElement(
                                                    'td',
                                                    null,
                                                    'Tourfast.pl'
                                                ),
                                                React.createElement(
                                                    'td',
                                                    null,
                                                    React.createElement('img', { src: 'http://w3widgets.com/responsive-slider/img/html5.png', alt: 'HTML', title: 'HTML', height: '40px' }),
                                                    React.createElement('img', { src: 'http://w3widgets.com/responsive-slider/img/css3.png', alt: 'css', title: 'css', height: '40px' }),
                                                    React.createElement('img', { src: 'https://michel.dumont.io/mdgFront/uploads/post/19/logo_javascript-small.png', alt: 'js', title: 'js', height: '40px' }),
                                                    React.createElement('img', { src: './img/phpmysql.jpeg', alt: 'php, mysql', title: 'php, mysql', height: '40px' }),
                                                    React.createElement('img', { src: './img/wordpress-logo.png', alt: 'wordpress', title: 'wordpress', height: '40px' }),
                                                    React.createElement('img', { src: './img/logo-elementor.png', alt: 'elementor', title: 'elementor', height: '40px' }),
                                                    React.createElement('img', { src: './img/Gtranslate.jpeg', alt: 'google translate', title: 'google translate', height: '40px' }),
                                                    React.createElement('img', { src: './img/Facebook_icon.png', alt: 'facebook logo', title: 'facebook logo', height: '40px' })
                                                ),
                                                React.createElement(
                                                    'td',
                                                    null,
                                                    React.createElement(
                                                        'button',
                                                        { type: 'button', className: 'btn btn-primary', 'data-toggle': 'collapse', 'data-target': '#opisTFW' },
                                                        'Opis Projektu'
                                                    )
                                                ),
                                                React.createElement(
                                                    'td',
                                                    null,
                                                    React.createElement(
                                                        'a',
                                                        { href: 'http://www.tourfast.pl', target: 'blanc' },
                                                        React.createElement('img', { src: './img/TFlogo.png', alt: 'tourfast.pl link to website', title: 'tourfast.pl link to website', height: '40px' })
                                                    )
                                                )
                                            ),
                                            React.createElement(
                                                'tr',
                                                { id: 'opisTFW', className: 'collapse' },
                                                React.createElement('td', null),
                                                React.createElement(
                                                    'td',
                                                    { colspan: '4' },
                                                    'Opis projektu "TourFast.pl":',
                                                    React.createElement('br', null),
                                                    'Strona zrealizowana dla start-upu, oferuj\u0105cego szybkie zwiedzanie miasta sto\u0142ecznego Warszawy w nowoczesny i szybki spos\xF3b na hulajnogach elektrycznych.'
                                                )
                                            ),
                                            React.createElement(
                                                'tr',
                                                null,
                                                React.createElement(
                                                    'td',
                                                    null,
                                                    'Coders Lab'
                                                ),
                                                React.createElement(
                                                    'td',
                                                    null,
                                                    React.createElement('img', { src: 'http://w3widgets.com/responsive-slider/img/html5.png', alt: 'HTML', title: 'HTML', height: '40px' }),
                                                    React.createElement('img', { src: 'http://w3widgets.com/responsive-slider/img/css3.png', alt: 'css', title: 'css', height: '40px' }),
                                                    React.createElement('img', { src: 'https://michel.dumont.io/mdgFront/uploads/post/19/logo_javascript-small.png', alt: 'js', title: 'js', height: '40px' }),
                                                    React.createElement('img', { src: './img/jquery-logo.png', alt: 'jquery logo', title: 'jquery logo', height: '40px' }),
                                                    React.createElement('img', { src: './img/ajax-logo.jpg', alt: 'ajax logo', title: 'ajax logo', height: '40px' }),
                                                    React.createElement('img', { src: './img/SassGulp_logo.png', alt: 'Sass Gulp logo', title: 'Sass Gulp logo', height: '40px' }),
                                                    React.createElement('img', { src: './img/phpmysql.jpeg', alt: 'php, mysql', title: 'php, mysql', height: '40px' }),
                                                    React.createElement('img', { src: './img/phpmyadmin-logo.jpg', alt: 'phpmyadmin-logo', title: 'phpmyadmin-logo', height: '40px' }),
                                                    React.createElement('img', { src: './img/wordpress-logo.png', alt: 'wordpress', title: 'wordpress', height: '40px' }),
                                                    React.createElement('img', { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRre2hbPNrjdZNQgXjRmf3sTv6R9oCYxUawL39KAx5PJX4DS6gW', alt: 'mailing', title: 'mailing', height: '40px' })
                                                ),
                                                React.createElement(
                                                    'td',
                                                    null,
                                                    React.createElement(
                                                        'button',
                                                        { type: 'button', className: 'btn btn-primary', 'data-toggle': 'collapse', 'data-target': '#opisCL' },
                                                        'Opis Projektu'
                                                    ),
                                                    React.createElement('div', { id: 'opisCL', className: 'collapse' })
                                                ),
                                                React.createElement(
                                                    'td',
                                                    null,
                                                    React.createElement(
                                                        'a',
                                                        { href: 'https://github.com/AndrzejKobuszewski/Fork.git', target: 'blanc' },
                                                        React.createElement('img', { src: './img/gitLogo.jpg', alt: 'github', title: 'github', height: '40px' })
                                                    )
                                                )
                                            ),
                                            React.createElement(
                                                'tr',
                                                { id: 'opisCL', className: 'collapse' },
                                                React.createElement('td', null),
                                                React.createElement(
                                                    'td',
                                                    { colspan: '4' },
                                                    'Opis projektu "Coders Lab":',
                                                    React.createElement('br', null),
                                                    'Coders Lab to szko\u0142a programowania, kt\xF3r\u0105 uko\u0144czy\u0142em w 2018 roku. Zaj\u0119cia prowadzone by\u0142y w trybie dziennym w formie intensywnego bootcampu przez 2 miesi\u0105ce z cotygodniowymi egzaminami. Szkoda, \u017Ce si\u0119 ju\u017C sko\u0144czy\u0142y... :-) Ka\u017Cdemu polecam tak\u0105 przygod\u0119.',
                                                    React.createElement('br', null),
                                                    React.createElement(
                                                        'i',
                                                        null,
                                                        'Z uwagi na prawa autorskie Szko\u0142y dost\u0119p do repo na github mocno ograniczy\u0142em.'
                                                    )
                                                )
                                            ),
                                            React.createElement(
                                                'tr',
                                                null,
                                                React.createElement(
                                                    'td',
                                                    null,
                                                    'Sie\u0107 wewn\u0119trzna'
                                                ),
                                                React.createElement(
                                                    'td',
                                                    null,
                                                    React.createElement('img', { src: './img/vba-logo.jpg', alt: 'vba logo', title: 'vba logo', height: '40px' }),
                                                    React.createElement('img', { src: './img/synology.png', alt: 'Synology logo', title: 'Synology logo', height: '40px' }),
                                                    React.createElement('img', { src: './img/Windows.png', alt: 'Windows logo', title: 'Windows logo', height: '40px' }),
                                                    React.createElement('img', { src: './img/android-logo.jpg', alt: 'android logo', title: 'android logo', height: '40px' }),
                                                    React.createElement('img', { src: './img/debian-logo.jpeg', alt: 'Debian logo', title: 'Debian logo', height: '40px' }),
                                                    React.createElement('img', { src: './img/ubuntu-logo.jpg', alt: 'Ubuntu logo', title: 'Ubuntu logo', height: '40px' }),
                                                    React.createElement('img', { src: './img/ansible-logo.jpg', alt: 'ansible logo', title: 'ansible logo', height: '40px' }),
                                                    React.createElement('img', { src: './img/arduino-logo.png', alt: 'arduino logo', title: 'arduino logo', height: '40px' }),
                                                    React.createElement('img', { src: './img/scratch-logo.png', alt: 'scratch logo', title: 'scratch logo', height: '40px' })
                                                ),
                                                React.createElement(
                                                    'td',
                                                    null,
                                                    React.createElement(
                                                        'button',
                                                        { type: 'button', className: 'btn btn-primary', 'data-toggle': 'collapse', 'data-target': '#opisN' },
                                                        'Opis Projektu'
                                                    )
                                                ),
                                                React.createElement(
                                                    'td',
                                                    null,
                                                    '-------'
                                                )
                                            ),
                                            React.createElement(
                                                'tr',
                                                { id: 'opisN', className: 'collapse' },
                                                React.createElement('td', null),
                                                React.createElement(
                                                    'td',
                                                    { colspan: '4' },
                                                    'Opis projektu "Sie\u0107 wewn\u0119trzna":',
                                                    React.createElement('br', null),
                                                    'Sie\u0107 wewn\u0119trzna to codzienne czynno\u015Bci zwi\u0105zane z administracj\u0105 urz\u0105dzeniami domowymi w tym serwerami i komputerami z systemami linux, windows 10 oraz domowymi urz\u0105dzeniami z w\u0142asnym autorskim oprogramowaniem.'
                                                )
                                            ),
                                            React.createElement(
                                                'tr',
                                                null,
                                                React.createElement(
                                                    'td',
                                                    null,
                                                    'IT Service Management'
                                                ),
                                                React.createElement(
                                                    'td',
                                                    null,
                                                    React.createElement('img', { src: './img/DevOps-logo.png', alt: 'DevOps logo', title: 'DevOps logo', height: '40px' }),
                                                    React.createElement('img', { src: './img/itil3-logo.jpeg', alt: 'itil3 logo', title: 'itil3 logo', height: '40px' }),
                                                    React.createElement('img', { src: './img/prince_2_practitioner.jpg', alt: 'prince_2_practitioner logo', title: 'prince_2_practitioner logo', height: '40px' }),
                                                    React.createElement('img', { src: './img/tk-logo.jpg', alt: 'tk logo', title: 'tk logo', height: '40px' }),
                                                    React.createElement('img', { src: './img/warszawa-logo.png', alt: 'warszawa logo', title: 'warszawa logo', height: '40px' }),
                                                    React.createElement('img', { src: './img/gddkia-logo.jpg', alt: 'gddkia logo', title: 'gddkia logo', height: '40px' }),
                                                    React.createElement('img', { src: './img/Jacobs-logo.png', alt: 'Jacobs logo', title: 'Jacobs logo', height: '40px' }),
                                                    React.createElement('img', { src: './img/cpk-logo.jpg', alt: 'Jcpk logo', title: 'cpk logo', height: '40px' })
                                                ),
                                                React.createElement(
                                                    'td',
                                                    null,
                                                    React.createElement(
                                                        'button',
                                                        { type: 'button', className: 'btn btn-primary', 'data-toggle': 'collapse', 'data-target': '#opisITSM' },
                                                        'Opis Projektu'
                                                    )
                                                ),
                                                React.createElement(
                                                    'td',
                                                    null,
                                                    '-------'
                                                )
                                            ),
                                            React.createElement(
                                                'tr',
                                                { id: 'opisITSM', className: 'collapse' },
                                                React.createElement('td', null),
                                                React.createElement(
                                                    'td',
                                                    { colspan: '4' },
                                                    'Opis projektu "IT Service Management":',
                                                    React.createElement('br', null),
                                                    'Zarz\u0105dzanie us\u0142ugami IT w transporcie towarzywszy mi przez ca\u0142e \u017Cycie zawodowe. Zaczyna\u0142em prac\u0119 przy systemie radiokomunikacji GSM-R dla kolei, nast\u0119pnie pracowa\u0142em w systemach ITS w drogownictwie, a obecnie zajmuj\u0119 si\u0119 us\u0142ugami integruj\u0105cymi ga\u0142\u0119zie transportu.'
                                                )
                                            )
                                        )
                                    )
                                )
                            )
                        );
                        break;
                    case 'Umiejętności':
                        return React.createElement(
                            'section',
                            { id: 'capabilities' },
                            React.createElement(
                                'div',
                                { className: 'jumbotron-fluid container container-fluid my-3' },
                                React.createElement(
                                    'div',
                                    { className: 'row' },
                                    React.createElement(
                                        'h2',
                                        { className: 'mx-auto mb-1' },
                                        'Umiej\u0119tno\u015Bci'
                                    )
                                ),
                                React.createElement(
                                    'div',
                                    { className: 'row' },
                                    React.createElement(
                                        'div',
                                        { className: 'col-sm-4' },
                                        React.createElement(
                                            'h3',
                                            null,
                                            'Edukacja'
                                        ),
                                        React.createElement(
                                            'ol',
                                            null,
                                            React.createElement(
                                                'li',
                                                { className: 'my-4' },
                                                'Skills sp. z o.o. \u2013 Prince2 Practitioner Certificate \u2013 2019 r.'
                                            ),
                                            React.createElement(
                                                'li',
                                                { className: 'my-4' },
                                                'Coders Lab \u2013 Junior Programmer Certificate \u2013 2018'
                                            ),
                                            React.createElement(
                                                'li',
                                                { className: 'my-4' },
                                                'Warsaw University of Technology (Politechnika Warszawska), Transport Division, Telecommunication in Transport (ITS)'
                                            )
                                        )
                                    ),
                                    React.createElement(
                                        'div',
                                        { className: 'col-sm-4' },
                                        React.createElement(
                                            'h3',
                                            null,
                                            'Szkolenia'
                                        ),
                                        React.createElement(
                                            'ol',
                                            null,
                                            React.createElement(
                                                'li',
                                                { className: 'my-2' },
                                                '2019        ITIL v.3 Transition - Szkolenie wewn\u0119trzne'
                                            ),
                                            React.createElement(
                                                'li',
                                                { className: 'my-2' },
                                                '2017 IT Manager Academy - IT Leader Club Polska'
                                            ),
                                            React.createElement(
                                                'li',
                                                { className: 'my-2' },
                                                '2017 Expert Business Process Management \u2013 Altkom'
                                            ),
                                            React.createElement(
                                                'li',
                                                { className: 'my-2' },
                                                '2017 Service Oriented Architecture \u2013 Altcom'
                                            ),
                                            React.createElement(
                                                'li',
                                                { className: 'my-2' },
                                                '2017 Togaf \u2013 prof. Andrzej Sobczak'
                                            ),
                                            React.createElement(
                                                'li',
                                                { className: 'my-2' },
                                                '2017   Montreal World ITS Congress'
                                            ),
                                            React.createElement(
                                                'li',
                                                { className: 'my-2' },
                                                '2016 IT Agreements \u2013 Maruta Wachta sp.j. \u2013 Law office'
                                            ),
                                            React.createElement(
                                                'li',
                                                { className: 'my-2' },
                                                '2016        Service Design \u2013 Prime Minister Office'
                                            ),
                                            React.createElement(
                                                'li',
                                                { className: 'my-2' },
                                                '2015 ITIL v.3 \u2013 CTPartners '
                                            ),
                                            React.createElement(
                                                'li',
                                                { className: 'my-2' },
                                                '2015  Detroit World ITS Congress'
                                            )
                                        )
                                    ),
                                    React.createElement(
                                        'div',
                                        { className: 'col-sm-4' },
                                        React.createElement(
                                            'h3',
                                            null,
                                            'J\u0119zyki obce'
                                        ),
                                        React.createElement(
                                            'ol',
                                            null,
                                            React.createElement(
                                                'li',
                                                { className: 'my-4' },
                                                'English - very good'
                                            ),
                                            React.createElement(
                                                'li',
                                                { className: 'my-4' },
                                                'German - comunicative'
                                            ),
                                            React.createElement(
                                                'li',
                                                { className: 'my-4' },
                                                'French - basic'
                                            )
                                        )
                                    )
                                )
                            )
                        );
                        break;
                    case 'Oferta':
                        return React.createElement(Oferta, null);
                        break;
                    default:
                        console.log("Mam nadzieję, że warto się uczyć Reacta");
                }
            } catch (error) {
                console.log("Wystąpił błąd");
            }
        }
    }]);

    return Content;
}(React.Component);

var App = function (_React$Component4) {
    _inherits(App, _React$Component4);

    function App() {
        var _ref;

        var _temp, _this4, _ret;

        _classCallCheck(this, App);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this4 = _possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this4), _this4.state = { active: "Start" }, _this4.itemclick = function () {
            _this4.setState({ active: "Projekty" });
        }, _this4.startclick = function () {
            _this4.setState({ active: "Start" });
        }, _this4.umiejetnosciclick = function () {
            _this4.setState({ active: "Umiejętności" });
        }, _this4.ofertaclick = function () {
            _this4.setState({ active: "Oferta" });
        }, _temp), _possibleConstructorReturn(_this4, _ret);
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            // const active = this.state.active;
            return React.createElement(
                'main',
                { className: 'container-fluid' },
                React.createElement(
                    'header',
                    null,
                    React.createElement(
                        'nav',
                        { className: 'col-sm-12 navbar navbar-expand-md bg-dark navbar-dark sticky sticky-top' },
                        React.createElement(
                            'button',
                            { className: 'navbar-toggler', type: 'button', 'data-toggle': 'collapse', 'data-target': '#collapsibleNavbar' },
                            React.createElement('span', { className: 'navbar-toggler-icon' })
                        ),
                        React.createElement(
                            'div',
                            { className: 'collapse navbar-collapse', id: 'collapsibleNavbar' },
                            React.createElement(Nav_Menu, { active: this.state.active, itemclick: this.itemclick, startclick: this.startclick, umiejetnosciclick: this.umiejetnosciclick, ofertaclick: this.ofertaclick })
                        ),
                        React.createElement('div', { className: 'clock nav-item nav-link', id: 'clock' })
                    )
                ),
                React.createElement(Content, { active: this.state.active, itemclick: this.itemclick })
            );
        }
    }]);

    return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.querySelector('#App'));

var LikeButton = function (_React$Component5) {
    _inherits(LikeButton, _React$Component5);

    function LikeButton(props) {
        _classCallCheck(this, LikeButton);

        var _this5 = _possibleConstructorReturn(this, (LikeButton.__proto__ || Object.getPrototypeOf(LikeButton)).call(this, props));

        _this5.state = { liked: false };
        return _this5;
    }

    _createClass(LikeButton, [{
        key: 'render',
        value: function render() {
            var _this6 = this;

            if (this.state.liked) {

                return React.createElement(
                    'button',
                    { className: 'btn btn-success', style: { float: "left" }, onClick: function onClick() {
                            return _this6.setState({ liked: false });
                        } },
                    'Polubi\u0142e\u015B to :-)'
                );
            }

            return React.createElement(
                'button',
                { className: 'btn btn-info', style: { float: "left" }, onClick: function onClick() {
                        return _this6.setState({ liked: true });
                    } },
                'Lubi\u0119 To'
            );
        }
    }]);

    return LikeButton;
}(React.Component);

function tick() {
    var element = React.createElement(
        'div',
        { className: 'clock text-white' },
        new Date().toLocaleTimeString()
    );
    ReactDOM.render(element, document.getElementById('clock'));
}

setInterval(tick, 1000);