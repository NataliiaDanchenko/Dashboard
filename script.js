let customersBlock = document.querySelector('.customers-script');

let customersObject = [
  {
    name: `Customer Name`,
    company: `Company`,
    phone: `Phone Number`,
    email: `Email`,
    country: `Country`,
    status: `Status`,
  },
  {
    name: `John Cooper`,
    company: `Microsoft`,
    phone: `(225) 555-0118`,
    email: `john@microsoft.com`,
    country: `Unated States`,
    status: `Active`,
  },
  {
    name: `Floyd Miles`,
    company: `Yahoo`,
    phone: `(205) 555-0100`,
    email: `floyd@yahoo.com`,
    country: `Kiribati`,
    status: `Inactive`,
  },
  {
    name: `Ronald Richards`,
    company: `Adobe`,
    phone: `(302) 555-0107`,
    email: `ronald@adobe.com`,
    country: `Israel`,
    status: `Inactive`,
  },
  {
    name: `Marvin McKinney`,
    company: `Tesla`,
    phone: `(252) 555-0126`,
    email: `marvin@tesla.com`,
    country: `Iran`,
    status: `Active`,
  },
  {
    name: `Jerome Bell`,
    company: `Google`,
    phone: `(629) 555-0129`,
    email: `jerome@google.com`,
    country: `Réunion`,
    status: `Active`,
  },
  {
    name: `Kathryn Murphy`,
    company: `Microsoft`,
    phone: `(406) 555-0120`,
    email: `kathryn@microsoft.com`,
    country: `Curaçao`,
    status: `Active`,
  },
  {
    name: `Jacob Jones`,
    company: `Yahoo`,
    phone: `(208) 555-0112`,
    email: `jacob@yahoo.com`,
    country: `Brazil`,
    status: `Active`,
  },
  {
    name: `Kristin Watson`,
    company: `Facebook`,
    phone: `(704) 555-0127`,
    email: `kristin@facebook.com`,
    country: `Åland Islands`,
    status: `Inactive`,
  }
]

customersObject.forEach(c => {
  let customerDiv = document.createElement('div');
  customersBlock.append(customerDiv);
  let html = `
        <div class="customer-1">
          <div class="width customer-1__name element">${c.name}</div>
          <div class="width customer-1__company element">${c.company}</div>
          <div class="width customer-1__phone element">${c.phone}</div>
          <div class="width customer-1__email element">${c.email}</div>
          <div class="width customer-1__country element">${c.country}</div>
          <div class="width customer-1__status status">${c.status}</div>
        </div>`;
  customerDiv.innerHTML = html;

  let name = document.querySelectorAll(`.customer-1__name`);
  let company = document.querySelectorAll(`.customer-1__company`);
  let phone = document.querySelectorAll(`.customer-1__phone`);
  let email = document.querySelectorAll(`.customer-1__email`);
  let country = document.querySelectorAll(`.customer-1__country`);
  let status = document.querySelectorAll(`.status`);

  for (let i = 0; i < name.length; i++) {
    if (name[i].textContent === `Customer Name`) {
      name[i].classList.add(`customer-tub`);
    }
  }

  for (let i = 0; i < company.length; i++) {
    if (company[i].textContent === `Company`) {
      company[i].classList.add(`customer-tub`);
    }
  }

  for (let i = 0; i < phone.length; i++) {
    if (phone[i].textContent === `Phone Number`) {
      phone[i].classList.add(`customer-tub`);
    }
  }

  for (let i = 0; i < email.length; i++) {
    if (email[i].textContent === `Email`) {
      email[i].classList.add(`customer-tub`);
    }
  }

  for (let i = 0; i < country.length; i++) {
    if (country[i].textContent === `Country`) {
      country[i].classList.add(`customer-tub`);
    }
  }

  for (let i = 0; i < status.length; i++) {
    if (status[i].textContent === `Status`) {
      status[i].classList.add(`status-tub`);
    }
    if (status[i].textContent === `Active`) {
      status[i].classList.add(`status-active`);
    }
    if (status[i].textContent === `Inactive`) {
      status[i].classList.add(`status-inactive`);
    }
  }
})

const burger = document.querySelector('.burger');
const burgerMenuCenter = document.createElement('div');
const nav = document.querySelector('.nav');
const input = document.querySelector('.input');

burger.addEventListener('click', clickBurger); // open burger menu

function clickBurger() {
  if (burger.classList.contains('burger')) {
    input.style.display = 'none';
    burger.classList.remove('burger');
    burger.classList.add('active');
    burgerMenuCenter.classList.add('burger-menu-center')
    burgerMenuCenter.innerHTML =
      `<div><a href = "#">Dashboard</a></div><div><a href="#">Product</a></div><div class="menu-customers text-customers">Customers</div><div><a href="#">Income</a></div><div><a href="#">Promote</a></div><div><a href="#">Help</a></div>`;
    nav.append(burgerMenuCenter);
  }
  else {
    burger.classList.remove('active');
    burgerMenuCenter.innerHTML = '';
    burgerMenuCenter.classList.remove('burger-menu-center');
    burger.classList.add('burger');
  }
}

$(function () {
  $(".widget input[type=submit], .widget a, .widget button").button();
  $("button, input, a").on("click", function (event) {
    event.preventDefault();
  });
});

const buttons = document.querySelectorAll('.ui-button');
const span = document.querySelector('.span-button');

window.onresize = function () {
  if (document.documentElement.clientWidth <= 320) {
    span.remove();
    for (let i = 0; i < buttons.length; i++) {
      if (buttons[i].textContent === `3` || buttons[i].textContent === `4` || buttons[i].textContent === `40`) {
        buttons[i].remove();
      }
    }
  }
};








