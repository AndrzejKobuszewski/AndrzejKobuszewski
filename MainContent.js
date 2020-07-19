'use strict';

//Single position in Main Menu

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Nav_Menu_Item = function (_React$Component) {
    _inherits(Nav_Menu_Item, _React$Component);

    function Nav_Menu_Item() {
        _classCallCheck(this, Nav_Menu_Item);

        return _possibleConstructorReturn(this, (Nav_Menu_Item.__proto__ || Object.getPrototypeOf(Nav_Menu_Item)).apply(this, arguments));
    }

    _createClass(Nav_Menu_Item, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                Menu_Item_Name = _props.Menu_Item_Name,
                _props$BootstrapClass = _props.BootstrapClass,
                BootstrapClass = _props$BootstrapClass === undefined ? "text-white-50" : _props$BootstrapClass;

            return React.createElement(
                'li',
                { onClick: itemclick, className: 'navbar-brand' + ' ' + BootstrapClass },
                Menu_Item_Name
            );

            function itemclick() {
                console.log(Menu_Item_Name);
                return Menu_Item_Name;
            }
        }
    }]);

    return Nav_Menu_Item;
}(React.Component);

var Nav_Menu = function (_React$Component2) {
    _inherits(Nav_Menu, _React$Component2);

    function Nav_Menu() {
        _classCallCheck(this, Nav_Menu);

        var _this2 = _possibleConstructorReturn(this, (Nav_Menu.__proto__ || Object.getPrototypeOf(Nav_Menu)).call(this));

        _this2.handleChange = _this2.handleChange.bind(_this2);
        _this2.state = { LastClicked: 'Start' };
        return _this2;
    }

    _createClass(Nav_Menu, [{
        key: 'handleChange',
        value: function handleChange(e) {
            this.setState({ LastClicked: e.Menu_Item_Name.itemclick() });
        }
    }, {
        key: 'render',
        value: function render() {
            var LastClicked = this.props.LastClicked;

            this.setState = { LastClicked: Nav_Menu_Item.Menu_Item_Name };
            console.log(this.state.LastClicked);
            try {
                switch (this.state.LastClicked) {

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
    }]);

    return Nav_Menu;
}(React.Component);

// React Main Menu below


var Nav_React = function (_React$Component3) {
    _inherits(Nav_React, _React$Component3);

    function Nav_React() {
        _classCallCheck(this, Nav_React);

        return _possibleConstructorReturn(this, (Nav_React.__proto__ || Object.getPrototypeOf(Nav_React)).apply(this, arguments));
    }

    _createClass(Nav_React, [{
        key: 'render',
        value: function render() {

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
                    React.createElement(Nav_Menu, { LastClicked: 'Start' })
                ),
                React.createElement('div', { className: 'clock nav-item nav-link', id: 'clock' })
            );
        }
    }]);

    return Nav_React;
}(React.Component);

ReactDOM.render(React.createElement(Nav_React, null), document.querySelector('#React-Nav'));