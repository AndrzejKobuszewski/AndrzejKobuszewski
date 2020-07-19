'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function Nav_Menu_Item(_ref) {
    var Menu_Item_Name = _ref.Menu_Item_Name,
        _ref$BootstrapClass = _ref.BootstrapClass,
        BootstrapClass = _ref$BootstrapClass === undefined ? "text-white-50" : _ref$BootstrapClass;


    return React.createElement(
        'li',
        { onClick: itemclick, className: 'navbar-brand' + ' ' + BootstrapClass },
        Menu_Item_Name
    );
}

function itemclick() {
    console.log(Menu_Item_Name);
    return Menu_Item_Name;
}

function Nav_Menu(stanTeraz) {

    render();
    {
        try {
            switch (stanTeraz) {

                case 'Start':
                    return React.createElement(
                        'ul',
                        { className: 'navbar-nav' },
                        React.createElement(Nav_Menu_Item, { Menu_Item_Name: 'Start', BootstrapClass: 'text-white' }),
                        React.createElement(Nav_Menu_Item, { Menu_Item_Name: 'Projekty', BootstrapClass: 'text-white-50' }),
                        React.createElement(Nav_Menu_Item, { Menu_Item_Name: 'Umiej\u0119tno\u015Bci', BootstrapClass: 'text-white-50' }),
                        React.createElement(Nav_Menu_Item, { Menu_Item_Name: 'Oferta', BootstrapClass: 'text-white-50' })
                    );
                    break;
                case 'Projekty':
                    return React.createElement(
                        'ul',
                        { className: 'navbar-nav' },
                        React.createElement(Nav_Menu_Item, { Menu_Item_Name: 'Start', BootstrapClass: 'text-white-50' }),
                        React.createElement(Nav_Menu_Item, { Menu_Item_Name: 'Projekty', BootstrapClass: 'text-white' }),
                        React.createElement(Nav_Menu_Item, { Menu_Item_Name: 'Umiej\u0119tno\u015Bci', BootstrapClass: 'text-white-50' }),
                        React.createElement(Nav_Menu_Item, { Menu_Item_Name: 'Oferta', BootstrapClass: 'text-white-50' })
                    );
                    break;
                case 'Umiejętności':
                    return React.createElement(
                        'ul',
                        { className: 'navbar-nav' },
                        React.createElement(Nav_Menu_Item, { Menu_Item_Name: 'Start', BootstrapClass: 'text-white-50' }),
                        React.createElement(Nav_Menu_Item, { Menu_Item_Name: 'Projekty', BootstrapClass: 'text-white-50' }),
                        React.createElement(Nav_Menu_Item, { Menu_Item_Name: 'Umiej\u0119tno\u015Bci', BootstrapClass: 'text-white' }),
                        React.createElement(Nav_Menu_Item, { Menu_Item_Name: 'Oferta', BootstrapClass: 'text-white-50' })
                    );
                    break;
                case 'Oferta':
                    return React.createElement(
                        'ul',
                        { className: 'navbar-nav' },
                        React.createElement(Nav_Menu_Item, { Menu_Item_Name: 'Start', BootstrapClass: 'text-white-50' }),
                        React.createElement(Nav_Menu_Item, { Menu_Item_Name: 'Projekty', BootstrapClass: 'text-white-50' }),
                        React.createElement(Nav_Menu_Item, { Menu_Item_Name: 'Umiej\u0119tno\u015Bci', BootstrapClass: 'text-white-50' }),
                        React.createElement(Nav_Menu_Item, { Menu_Item_Name: 'Oferta', BootstrapClass: 'text-white' })
                    );
                    break;
                default:
                    console.log("Mam nadzieję, że warto się uczyć Reacta");
            }
        } catch (error) {
            console.log("Wystąpił błąd");
        }
    }
}

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.state = { active: "Start" };
        return _this;
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            var _props$stan = this.props.stan,
                stan = _props$stan === undefined ? "Projekty" : _props$stan;

            return React.createElement(
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
                    React.createElement(
                        'h1',
                        null,
                        this.state.active
                    ),
                    React.createElement(
                        'h1',
                        null,
                        stan
                    ),
                    React.createElement(Nav_Menu, { stanTeraz: 'Oferta' })
                ),
                React.createElement('div', { className: 'clock nav-item nav-link', id: 'clock' })
            );
        }
    }]);

    return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.querySelector('#App'));