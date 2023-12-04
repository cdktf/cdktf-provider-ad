# `user` Submodule <a name="`user` Submodule" id="@cdktf/provider-ad.user"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### User <a name="User" id="@cdktf/provider-ad.user.User"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user ad_user}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.user.User.Initializer"></a>

```python
from cdktf_cdktf_provider_ad import user

user.User(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  display_name: str,
  principal_name: str,
  sam_account_name: str,
  cannot_change_password: typing.Union[bool, IResolvable] = None,
  city: str = None,
  company: str = None,
  container: str = None,
  country: str = None,
  custom_attributes: str = None,
  department: str = None,
  description: str = None,
  division: str = None,
  email_address: str = None,
  employee_id: str = None,
  employee_number: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  fax: str = None,
  given_name: str = None,
  home_directory: str = None,
  home_drive: str = None,
  home_page: str = None,
  home_phone: str = None,
  id: str = None,
  initial_password: str = None,
  initials: str = None,
  mobile_phone: str = None,
  office: str = None,
  office_phone: str = None,
  organization: str = None,
  other_name: str = None,
  password_never_expires: typing.Union[bool, IResolvable] = None,
  po_box: str = None,
  postal_code: str = None,
  smart_card_logon_required: typing.Union[bool, IResolvable] = None,
  state: str = None,
  street_address: str = None,
  surname: str = None,
  title: str = None,
  trusted_for_delegation: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.user.User.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ad.user.User.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ad.user.User.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The Display Name of an Active Directory user. |
| <code><a href="#@cdktf/provider-ad.user.User.Initializer.parameter.principalName">principal_name</a></code> | <code>str</code> | The Principal Name of an Active Directory user. |
| <code><a href="#@cdktf/provider-ad.user.User.Initializer.parameter.samAccountName">sam_account_name</a></code> | <code>str</code> | The pre-win2k user logon name. |
| <code><a href="#@cdktf/provider-ad.user.User.Initializer.parameter.cannotChangePassword">cannot_change_password</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to true, the user will not be allowed to change their password. |
| <code><a href="#@cdktf/provider-ad.user.User.Initializer.parameter.city">city</a></code> | <code>str</code> | Specifies the user's town or city. This parameter sets the City property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.User.Initializer.parameter.company">company</a></code> | <code>str</code> | Specifies the user's company. This parameter sets the Company property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.User.Initializer.parameter.container">container</a></code> | <code>str</code> | A DN of the container object that will be holding the user. |
| <code><a href="#@cdktf/provider-ad.user.User.Initializer.parameter.country">country</a></code> | <code>str</code> | Specifies the country by setting the country code (refer to ISO 3166). |
| <code><a href="#@cdktf/provider-ad.user.User.Initializer.parameter.customAttributes">custom_attributes</a></code> | <code>str</code> | JSON encoded map that represents key/value pairs for custom attributes. |
| <code><a href="#@cdktf/provider-ad.user.User.Initializer.parameter.department">department</a></code> | <code>str</code> | Specifies the user's department. This parameter sets the Department property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.User.Initializer.parameter.description">description</a></code> | <code>str</code> | Specifies a description of the object. This parameter sets the value of the Description property for the user object. |
| <code><a href="#@cdktf/provider-ad.user.User.Initializer.parameter.division">division</a></code> | <code>str</code> | Specifies the user's division. This parameter sets the Division property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.User.Initializer.parameter.emailAddress">email_address</a></code> | <code>str</code> | Specifies the user's e-mail address. This parameter sets the EmailAddress property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.User.Initializer.parameter.employeeId">employee_id</a></code> | <code>str</code> | Specifies the user's employee ID. This parameter sets the EmployeeID property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.User.Initializer.parameter.employeeNumber">employee_number</a></code> | <code>str</code> | Specifies the user's employee number. This parameter sets the EmployeeNumber property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.User.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to false, the user will be disabled. |
| <code><a href="#@cdktf/provider-ad.user.User.Initializer.parameter.fax">fax</a></code> | <code>str</code> | Specifies the user's fax phone number. This parameter sets the Fax property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.User.Initializer.parameter.givenName">given_name</a></code> | <code>str</code> | Specifies the user's given name. This parameter sets the GivenName property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.User.Initializer.parameter.homeDirectory">home_directory</a></code> | <code>str</code> | Specifies a user's home directory. This parameter sets the HomeDirectory property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.User.Initializer.parameter.homeDrive">home_drive</a></code> | <code>str</code> | Specifies a drive that is associated with the UNC path defined by the HomeDirectory property. |
| <code><a href="#@cdktf/provider-ad.user.User.Initializer.parameter.homePage">home_page</a></code> | <code>str</code> | Specifies the URL of the home page of the object. |
| <code><a href="#@cdktf/provider-ad.user.User.Initializer.parameter.homePhone">home_phone</a></code> | <code>str</code> | Specifies the user's home telephone number. This parameter sets the HomePhone property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.User.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#id User#id}. |
| <code><a href="#@cdktf/provider-ad.user.User.Initializer.parameter.initialPassword">initial_password</a></code> | <code>str</code> | The user's initial password. This will be set on creation but will *not* be enforced in subsequent plans. |
| <code><a href="#@cdktf/provider-ad.user.User.Initializer.parameter.initials">initials</a></code> | <code>str</code> | Specifies the initials that represent part of a user's name. Maximum 6 char. |
| <code><a href="#@cdktf/provider-ad.user.User.Initializer.parameter.mobilePhone">mobile_phone</a></code> | <code>str</code> | Specifies the user's mobile phone number. This parameter sets the MobilePhone property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.User.Initializer.parameter.office">office</a></code> | <code>str</code> | Specifies the location of the user's office or place of business. |
| <code><a href="#@cdktf/provider-ad.user.User.Initializer.parameter.officePhone">office_phone</a></code> | <code>str</code> | Specifies the user's office telephone number. This parameter sets the OfficePhone property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.User.Initializer.parameter.organization">organization</a></code> | <code>str</code> | Specifies the user's organization. This parameter sets the Organization property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.User.Initializer.parameter.otherName">other_name</a></code> | <code>str</code> | Specifies a name in addition to a user's given name and surname, such as the user's middle name. |
| <code><a href="#@cdktf/provider-ad.user.User.Initializer.parameter.passwordNeverExpires">password_never_expires</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to true, the password for this user will not expire. |
| <code><a href="#@cdktf/provider-ad.user.User.Initializer.parameter.poBox">po_box</a></code> | <code>str</code> | Specifies the user's post office box number. This parameter sets the POBox property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.User.Initializer.parameter.postalCode">postal_code</a></code> | <code>str</code> | Specifies the user's postal code or zip code. This parameter sets the PostalCode property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.User.Initializer.parameter.smartCardLogonRequired">smart_card_logon_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to true, a smart card is required to logon. |
| <code><a href="#@cdktf/provider-ad.user.User.Initializer.parameter.state">state</a></code> | <code>str</code> | Specifies the user's or Organizational Unit's state or province. This parameter sets the State property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.User.Initializer.parameter.streetAddress">street_address</a></code> | <code>str</code> | Specifies the user's street address. This parameter sets the StreetAddress property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.User.Initializer.parameter.surname">surname</a></code> | <code>str</code> | Specifies the user's last name or surname. This parameter sets the Surname property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.User.Initializer.parameter.title">title</a></code> | <code>str</code> | Specifies the user's title. This parameter sets the Title property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.User.Initializer.parameter.trustedForDelegation">trusted_for_delegation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to true, the user account is trusted for Kerberos delegation. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ad.user.User.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ad.user.User.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ad.user.User.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ad.user.User.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ad.user.User.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ad.user.User.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ad.user.User.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ad.user.User.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ad.user.User.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-ad.user.User.Initializer.parameter.displayName"></a>

- *Type:* str

The Display Name of an Active Directory user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#display_name User#display_name}

---

##### `principal_name`<sup>Required</sup> <a name="principal_name" id="@cdktf/provider-ad.user.User.Initializer.parameter.principalName"></a>

- *Type:* str

The Principal Name of an Active Directory user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#principal_name User#principal_name}

---

##### `sam_account_name`<sup>Required</sup> <a name="sam_account_name" id="@cdktf/provider-ad.user.User.Initializer.parameter.samAccountName"></a>

- *Type:* str

The pre-win2k user logon name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#sam_account_name User#sam_account_name}

---

##### `cannot_change_password`<sup>Optional</sup> <a name="cannot_change_password" id="@cdktf/provider-ad.user.User.Initializer.parameter.cannotChangePassword"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, the user will not be allowed to change their password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#cannot_change_password User#cannot_change_password}

---

##### `city`<sup>Optional</sup> <a name="city" id="@cdktf/provider-ad.user.User.Initializer.parameter.city"></a>

- *Type:* str

Specifies the user's town or city. This parameter sets the City property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#city User#city}

---

##### `company`<sup>Optional</sup> <a name="company" id="@cdktf/provider-ad.user.User.Initializer.parameter.company"></a>

- *Type:* str

Specifies the user's company. This parameter sets the Company property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#company User#company}

---

##### `container`<sup>Optional</sup> <a name="container" id="@cdktf/provider-ad.user.User.Initializer.parameter.container"></a>

- *Type:* str

A DN of the container object that will be holding the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#container User#container}

---

##### `country`<sup>Optional</sup> <a name="country" id="@cdktf/provider-ad.user.User.Initializer.parameter.country"></a>

- *Type:* str

Specifies the country by setting the country code (refer to ISO 3166).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#country User#country}

---

##### `custom_attributes`<sup>Optional</sup> <a name="custom_attributes" id="@cdktf/provider-ad.user.User.Initializer.parameter.customAttributes"></a>

- *Type:* str

JSON encoded map that represents key/value pairs for custom attributes.

Please note that `terraform import` will not import these attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#custom_attributes User#custom_attributes}

---

##### `department`<sup>Optional</sup> <a name="department" id="@cdktf/provider-ad.user.User.Initializer.parameter.department"></a>

- *Type:* str

Specifies the user's department. This parameter sets the Department property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#department User#department}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-ad.user.User.Initializer.parameter.description"></a>

- *Type:* str

Specifies a description of the object. This parameter sets the value of the Description property for the user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#description User#description}

---

##### `division`<sup>Optional</sup> <a name="division" id="@cdktf/provider-ad.user.User.Initializer.parameter.division"></a>

- *Type:* str

Specifies the user's division. This parameter sets the Division property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#division User#division}

---

##### `email_address`<sup>Optional</sup> <a name="email_address" id="@cdktf/provider-ad.user.User.Initializer.parameter.emailAddress"></a>

- *Type:* str

Specifies the user's e-mail address. This parameter sets the EmailAddress property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#email_address User#email_address}

---

##### `employee_id`<sup>Optional</sup> <a name="employee_id" id="@cdktf/provider-ad.user.User.Initializer.parameter.employeeId"></a>

- *Type:* str

Specifies the user's employee ID. This parameter sets the EmployeeID property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#employee_id User#employee_id}

---

##### `employee_number`<sup>Optional</sup> <a name="employee_number" id="@cdktf/provider-ad.user.User.Initializer.parameter.employeeNumber"></a>

- *Type:* str

Specifies the user's employee number. This parameter sets the EmployeeNumber property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#employee_number User#employee_number}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-ad.user.User.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to false, the user will be disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#enabled User#enabled}

---

##### `fax`<sup>Optional</sup> <a name="fax" id="@cdktf/provider-ad.user.User.Initializer.parameter.fax"></a>

- *Type:* str

Specifies the user's fax phone number. This parameter sets the Fax property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#fax User#fax}

---

##### `given_name`<sup>Optional</sup> <a name="given_name" id="@cdktf/provider-ad.user.User.Initializer.parameter.givenName"></a>

- *Type:* str

Specifies the user's given name. This parameter sets the GivenName property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#given_name User#given_name}

---

##### `home_directory`<sup>Optional</sup> <a name="home_directory" id="@cdktf/provider-ad.user.User.Initializer.parameter.homeDirectory"></a>

- *Type:* str

Specifies a user's home directory. This parameter sets the HomeDirectory property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#home_directory User#home_directory}

---

##### `home_drive`<sup>Optional</sup> <a name="home_drive" id="@cdktf/provider-ad.user.User.Initializer.parameter.homeDrive"></a>

- *Type:* str

Specifies a drive that is associated with the UNC path defined by the HomeDirectory property.

The drive letter is specified as <DriveLetter>: where <DriveLetter> indicates the letter of the drive to associate. The <DriveLetter> must be a single, uppercase letter and the colon is required. This parameter sets the HomeDrive property of the user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#home_drive User#home_drive}

---

##### `home_page`<sup>Optional</sup> <a name="home_page" id="@cdktf/provider-ad.user.User.Initializer.parameter.homePage"></a>

- *Type:* str

Specifies the URL of the home page of the object.

This parameter sets the homePage property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#home_page User#home_page}

---

##### `home_phone`<sup>Optional</sup> <a name="home_phone" id="@cdktf/provider-ad.user.User.Initializer.parameter.homePhone"></a>

- *Type:* str

Specifies the user's home telephone number. This parameter sets the HomePhone property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#home_phone User#home_phone}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ad.user.User.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#id User#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initial_password`<sup>Optional</sup> <a name="initial_password" id="@cdktf/provider-ad.user.User.Initializer.parameter.initialPassword"></a>

- *Type:* str

The user's initial password. This will be set on creation but will *not* be enforced in subsequent plans.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#initial_password User#initial_password}

---

##### `initials`<sup>Optional</sup> <a name="initials" id="@cdktf/provider-ad.user.User.Initializer.parameter.initials"></a>

- *Type:* str

Specifies the initials that represent part of a user's name. Maximum 6 char.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#initials User#initials}

---

##### `mobile_phone`<sup>Optional</sup> <a name="mobile_phone" id="@cdktf/provider-ad.user.User.Initializer.parameter.mobilePhone"></a>

- *Type:* str

Specifies the user's mobile phone number. This parameter sets the MobilePhone property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#mobile_phone User#mobile_phone}

---

##### `office`<sup>Optional</sup> <a name="office" id="@cdktf/provider-ad.user.User.Initializer.parameter.office"></a>

- *Type:* str

Specifies the location of the user's office or place of business.

This parameter sets the Office property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#office User#office}

---

##### `office_phone`<sup>Optional</sup> <a name="office_phone" id="@cdktf/provider-ad.user.User.Initializer.parameter.officePhone"></a>

- *Type:* str

Specifies the user's office telephone number. This parameter sets the OfficePhone property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#office_phone User#office_phone}

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-ad.user.User.Initializer.parameter.organization"></a>

- *Type:* str

Specifies the user's organization. This parameter sets the Organization property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#organization User#organization}

---

##### `other_name`<sup>Optional</sup> <a name="other_name" id="@cdktf/provider-ad.user.User.Initializer.parameter.otherName"></a>

- *Type:* str

Specifies a name in addition to a user's given name and surname, such as the user's middle name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#other_name User#other_name}

---

##### `password_never_expires`<sup>Optional</sup> <a name="password_never_expires" id="@cdktf/provider-ad.user.User.Initializer.parameter.passwordNeverExpires"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, the password for this user will not expire.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#password_never_expires User#password_never_expires}

---

##### `po_box`<sup>Optional</sup> <a name="po_box" id="@cdktf/provider-ad.user.User.Initializer.parameter.poBox"></a>

- *Type:* str

Specifies the user's post office box number. This parameter sets the POBox property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#po_box User#po_box}

---

##### `postal_code`<sup>Optional</sup> <a name="postal_code" id="@cdktf/provider-ad.user.User.Initializer.parameter.postalCode"></a>

- *Type:* str

Specifies the user's postal code or zip code. This parameter sets the PostalCode property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#postal_code User#postal_code}

---

##### `smart_card_logon_required`<sup>Optional</sup> <a name="smart_card_logon_required" id="@cdktf/provider-ad.user.User.Initializer.parameter.smartCardLogonRequired"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, a smart card is required to logon.

This parameter sets the SmartCardLoginRequired property for a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#smart_card_logon_required User#smart_card_logon_required}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-ad.user.User.Initializer.parameter.state"></a>

- *Type:* str

Specifies the user's or Organizational Unit's state or province. This parameter sets the State property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#state User#state}

---

##### `street_address`<sup>Optional</sup> <a name="street_address" id="@cdktf/provider-ad.user.User.Initializer.parameter.streetAddress"></a>

- *Type:* str

Specifies the user's street address. This parameter sets the StreetAddress property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#street_address User#street_address}

---

##### `surname`<sup>Optional</sup> <a name="surname" id="@cdktf/provider-ad.user.User.Initializer.parameter.surname"></a>

- *Type:* str

Specifies the user's last name or surname. This parameter sets the Surname property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#surname User#surname}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-ad.user.User.Initializer.parameter.title"></a>

- *Type:* str

Specifies the user's title. This parameter sets the Title property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#title User#title}

---

##### `trusted_for_delegation`<sup>Optional</sup> <a name="trusted_for_delegation" id="@cdktf/provider-ad.user.User.Initializer.parameter.trustedForDelegation"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, the user account is trusted for Kerberos delegation.

A service that runs under an account that is trusted for Kerberos delegation can assume the identity of a client requesting the service. This parameter sets the TrustedForDelegation property of an account object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#trusted_for_delegation User#trusted_for_delegation}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.user.User.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ad.user.User.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ad.user.User.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ad.user.User.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ad.user.User.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-ad.user.User.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-ad.user.User.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-ad.user.User.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-ad.user.User.resetCannotChangePassword">reset_cannot_change_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetCity">reset_city</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetCompany">reset_company</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetContainer">reset_container</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetCountry">reset_country</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetCustomAttributes">reset_custom_attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetDepartment">reset_department</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetDivision">reset_division</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetEmailAddress">reset_email_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetEmployeeId">reset_employee_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetEmployeeNumber">reset_employee_number</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetFax">reset_fax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetGivenName">reset_given_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetHomeDirectory">reset_home_directory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetHomeDrive">reset_home_drive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetHomePage">reset_home_page</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetHomePhone">reset_home_phone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetInitialPassword">reset_initial_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetInitials">reset_initials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetMobilePhone">reset_mobile_phone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetOffice">reset_office</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetOfficePhone">reset_office_phone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetOrganization">reset_organization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetOtherName">reset_other_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetPasswordNeverExpires">reset_password_never_expires</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetPoBox">reset_po_box</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetPostalCode">reset_postal_code</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetSmartCardLogonRequired">reset_smart_card_logon_required</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetStreetAddress">reset_street_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetSurname">reset_surname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetTitle">reset_title</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetTrustedForDelegation">reset_trusted_for_delegation</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ad.user.User.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-ad.user.User.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ad.user.User.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ad.user.User.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-ad.user.User.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-ad.user.User.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-ad.user.User.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-ad.user.User.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-ad.user.User.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-ad.user.User.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-ad.user.User.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ad.user.User.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ad.user.User.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ad.user.User.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ad.user.User.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ad.user.User.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ad.user.User.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ad.user.User.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ad.user.User.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ad.user.User.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ad.user.User.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ad.user.User.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ad.user.User.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ad.user.User.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ad.user.User.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ad.user.User.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ad.user.User.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ad.user.User.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ad.user.User.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-ad.user.User.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-ad.user.User.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ad.user.User.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ad.user.User.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ad.user.User.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ad.user.User.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-ad.user.User.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ad.user.User.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-ad.user.User.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-ad.user.User.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-ad.user.User.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-ad.user.User.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ad.user.User.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_cannot_change_password` <a name="reset_cannot_change_password" id="@cdktf/provider-ad.user.User.resetCannotChangePassword"></a>

```python
def reset_cannot_change_password() -> None
```

##### `reset_city` <a name="reset_city" id="@cdktf/provider-ad.user.User.resetCity"></a>

```python
def reset_city() -> None
```

##### `reset_company` <a name="reset_company" id="@cdktf/provider-ad.user.User.resetCompany"></a>

```python
def reset_company() -> None
```

##### `reset_container` <a name="reset_container" id="@cdktf/provider-ad.user.User.resetContainer"></a>

```python
def reset_container() -> None
```

##### `reset_country` <a name="reset_country" id="@cdktf/provider-ad.user.User.resetCountry"></a>

```python
def reset_country() -> None
```

##### `reset_custom_attributes` <a name="reset_custom_attributes" id="@cdktf/provider-ad.user.User.resetCustomAttributes"></a>

```python
def reset_custom_attributes() -> None
```

##### `reset_department` <a name="reset_department" id="@cdktf/provider-ad.user.User.resetDepartment"></a>

```python
def reset_department() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-ad.user.User.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_division` <a name="reset_division" id="@cdktf/provider-ad.user.User.resetDivision"></a>

```python
def reset_division() -> None
```

##### `reset_email_address` <a name="reset_email_address" id="@cdktf/provider-ad.user.User.resetEmailAddress"></a>

```python
def reset_email_address() -> None
```

##### `reset_employee_id` <a name="reset_employee_id" id="@cdktf/provider-ad.user.User.resetEmployeeId"></a>

```python
def reset_employee_id() -> None
```

##### `reset_employee_number` <a name="reset_employee_number" id="@cdktf/provider-ad.user.User.resetEmployeeNumber"></a>

```python
def reset_employee_number() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-ad.user.User.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_fax` <a name="reset_fax" id="@cdktf/provider-ad.user.User.resetFax"></a>

```python
def reset_fax() -> None
```

##### `reset_given_name` <a name="reset_given_name" id="@cdktf/provider-ad.user.User.resetGivenName"></a>

```python
def reset_given_name() -> None
```

##### `reset_home_directory` <a name="reset_home_directory" id="@cdktf/provider-ad.user.User.resetHomeDirectory"></a>

```python
def reset_home_directory() -> None
```

##### `reset_home_drive` <a name="reset_home_drive" id="@cdktf/provider-ad.user.User.resetHomeDrive"></a>

```python
def reset_home_drive() -> None
```

##### `reset_home_page` <a name="reset_home_page" id="@cdktf/provider-ad.user.User.resetHomePage"></a>

```python
def reset_home_page() -> None
```

##### `reset_home_phone` <a name="reset_home_phone" id="@cdktf/provider-ad.user.User.resetHomePhone"></a>

```python
def reset_home_phone() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-ad.user.User.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_initial_password` <a name="reset_initial_password" id="@cdktf/provider-ad.user.User.resetInitialPassword"></a>

```python
def reset_initial_password() -> None
```

##### `reset_initials` <a name="reset_initials" id="@cdktf/provider-ad.user.User.resetInitials"></a>

```python
def reset_initials() -> None
```

##### `reset_mobile_phone` <a name="reset_mobile_phone" id="@cdktf/provider-ad.user.User.resetMobilePhone"></a>

```python
def reset_mobile_phone() -> None
```

##### `reset_office` <a name="reset_office" id="@cdktf/provider-ad.user.User.resetOffice"></a>

```python
def reset_office() -> None
```

##### `reset_office_phone` <a name="reset_office_phone" id="@cdktf/provider-ad.user.User.resetOfficePhone"></a>

```python
def reset_office_phone() -> None
```

##### `reset_organization` <a name="reset_organization" id="@cdktf/provider-ad.user.User.resetOrganization"></a>

```python
def reset_organization() -> None
```

##### `reset_other_name` <a name="reset_other_name" id="@cdktf/provider-ad.user.User.resetOtherName"></a>

```python
def reset_other_name() -> None
```

##### `reset_password_never_expires` <a name="reset_password_never_expires" id="@cdktf/provider-ad.user.User.resetPasswordNeverExpires"></a>

```python
def reset_password_never_expires() -> None
```

##### `reset_po_box` <a name="reset_po_box" id="@cdktf/provider-ad.user.User.resetPoBox"></a>

```python
def reset_po_box() -> None
```

##### `reset_postal_code` <a name="reset_postal_code" id="@cdktf/provider-ad.user.User.resetPostalCode"></a>

```python
def reset_postal_code() -> None
```

##### `reset_smart_card_logon_required` <a name="reset_smart_card_logon_required" id="@cdktf/provider-ad.user.User.resetSmartCardLogonRequired"></a>

```python
def reset_smart_card_logon_required() -> None
```

##### `reset_state` <a name="reset_state" id="@cdktf/provider-ad.user.User.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_street_address` <a name="reset_street_address" id="@cdktf/provider-ad.user.User.resetStreetAddress"></a>

```python
def reset_street_address() -> None
```

##### `reset_surname` <a name="reset_surname" id="@cdktf/provider-ad.user.User.resetSurname"></a>

```python
def reset_surname() -> None
```

##### `reset_title` <a name="reset_title" id="@cdktf/provider-ad.user.User.resetTitle"></a>

```python
def reset_title() -> None
```

##### `reset_trusted_for_delegation` <a name="reset_trusted_for_delegation" id="@cdktf/provider-ad.user.User.resetTrustedForDelegation"></a>

```python
def reset_trusted_for_delegation() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.user.User.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ad.user.User.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a User resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-ad.user.User.isConstruct"></a>

```python
from cdktf_cdktf_provider_ad import user

user.User.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ad.user.User.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-ad.user.User.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_ad import user

user.User.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ad.user.User.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-ad.user.User.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_ad import user

user.User.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ad.user.User.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-ad.user.User.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_ad import user

user.User.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a User resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ad.user.User.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-ad.user.User.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the User to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-ad.user.User.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing User that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ad.user.User.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the User to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.user.User.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ad.user.User.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.dn">dn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.sid">sid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.cannotChangePasswordInput">cannot_change_password_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.cityInput">city_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.companyInput">company_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.containerInput">container_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.countryInput">country_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.customAttributesInput">custom_attributes_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.departmentInput">department_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.divisionInput">division_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.emailAddressInput">email_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.employeeIdInput">employee_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.employeeNumberInput">employee_number_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.faxInput">fax_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.givenNameInput">given_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.homeDirectoryInput">home_directory_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.homeDriveInput">home_drive_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.homePageInput">home_page_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.homePhoneInput">home_phone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.initialPasswordInput">initial_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.initialsInput">initials_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.mobilePhoneInput">mobile_phone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.officeInput">office_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.officePhoneInput">office_phone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.organizationInput">organization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.otherNameInput">other_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.passwordNeverExpiresInput">password_never_expires_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.poBoxInput">po_box_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.postalCodeInput">postal_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.principalNameInput">principal_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.samAccountNameInput">sam_account_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.smartCardLogonRequiredInput">smart_card_logon_required_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.streetAddressInput">street_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.surnameInput">surname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.trustedForDelegationInput">trusted_for_delegation_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.cannotChangePassword">cannot_change_password</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.city">city</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.company">company</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.container">container</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.country">country</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.customAttributes">custom_attributes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.department">department</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.division">division</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.emailAddress">email_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.employeeId">employee_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.employeeNumber">employee_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.fax">fax</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.givenName">given_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.homeDirectory">home_directory</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.homeDrive">home_drive</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.homePage">home_page</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.homePhone">home_phone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.initialPassword">initial_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.initials">initials</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.mobilePhone">mobile_phone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.office">office</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.officePhone">office_phone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.organization">organization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.otherName">other_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.passwordNeverExpires">password_never_expires</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.poBox">po_box</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.postalCode">postal_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.principalName">principal_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.samAccountName">sam_account_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.smartCardLogonRequired">smart_card_logon_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.streetAddress">street_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.surname">surname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.trustedForDelegation">trusted_for_delegation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ad.user.User.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-ad.user.User.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ad.user.User.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-ad.user.User.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-ad.user.User.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-ad.user.User.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-ad.user.User.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ad.user.User.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ad.user.User.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ad.user.User.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ad.user.User.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ad.user.User.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ad.user.User.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ad.user.User.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `dn`<sup>Required</sup> <a name="dn" id="@cdktf/provider-ad.user.User.property.dn"></a>

```python
dn: str
```

- *Type:* str

---

##### `sid`<sup>Required</sup> <a name="sid" id="@cdktf/provider-ad.user.User.property.sid"></a>

```python
sid: str
```

- *Type:* str

---

##### `cannot_change_password_input`<sup>Optional</sup> <a name="cannot_change_password_input" id="@cdktf/provider-ad.user.User.property.cannotChangePasswordInput"></a>

```python
cannot_change_password_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `city_input`<sup>Optional</sup> <a name="city_input" id="@cdktf/provider-ad.user.User.property.cityInput"></a>

```python
city_input: str
```

- *Type:* str

---

##### `company_input`<sup>Optional</sup> <a name="company_input" id="@cdktf/provider-ad.user.User.property.companyInput"></a>

```python
company_input: str
```

- *Type:* str

---

##### `container_input`<sup>Optional</sup> <a name="container_input" id="@cdktf/provider-ad.user.User.property.containerInput"></a>

```python
container_input: str
```

- *Type:* str

---

##### `country_input`<sup>Optional</sup> <a name="country_input" id="@cdktf/provider-ad.user.User.property.countryInput"></a>

```python
country_input: str
```

- *Type:* str

---

##### `custom_attributes_input`<sup>Optional</sup> <a name="custom_attributes_input" id="@cdktf/provider-ad.user.User.property.customAttributesInput"></a>

```python
custom_attributes_input: str
```

- *Type:* str

---

##### `department_input`<sup>Optional</sup> <a name="department_input" id="@cdktf/provider-ad.user.User.property.departmentInput"></a>

```python
department_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-ad.user.User.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-ad.user.User.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `division_input`<sup>Optional</sup> <a name="division_input" id="@cdktf/provider-ad.user.User.property.divisionInput"></a>

```python
division_input: str
```

- *Type:* str

---

##### `email_address_input`<sup>Optional</sup> <a name="email_address_input" id="@cdktf/provider-ad.user.User.property.emailAddressInput"></a>

```python
email_address_input: str
```

- *Type:* str

---

##### `employee_id_input`<sup>Optional</sup> <a name="employee_id_input" id="@cdktf/provider-ad.user.User.property.employeeIdInput"></a>

```python
employee_id_input: str
```

- *Type:* str

---

##### `employee_number_input`<sup>Optional</sup> <a name="employee_number_input" id="@cdktf/provider-ad.user.User.property.employeeNumberInput"></a>

```python
employee_number_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-ad.user.User.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `fax_input`<sup>Optional</sup> <a name="fax_input" id="@cdktf/provider-ad.user.User.property.faxInput"></a>

```python
fax_input: str
```

- *Type:* str

---

##### `given_name_input`<sup>Optional</sup> <a name="given_name_input" id="@cdktf/provider-ad.user.User.property.givenNameInput"></a>

```python
given_name_input: str
```

- *Type:* str

---

##### `home_directory_input`<sup>Optional</sup> <a name="home_directory_input" id="@cdktf/provider-ad.user.User.property.homeDirectoryInput"></a>

```python
home_directory_input: str
```

- *Type:* str

---

##### `home_drive_input`<sup>Optional</sup> <a name="home_drive_input" id="@cdktf/provider-ad.user.User.property.homeDriveInput"></a>

```python
home_drive_input: str
```

- *Type:* str

---

##### `home_page_input`<sup>Optional</sup> <a name="home_page_input" id="@cdktf/provider-ad.user.User.property.homePageInput"></a>

```python
home_page_input: str
```

- *Type:* str

---

##### `home_phone_input`<sup>Optional</sup> <a name="home_phone_input" id="@cdktf/provider-ad.user.User.property.homePhoneInput"></a>

```python
home_phone_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-ad.user.User.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `initial_password_input`<sup>Optional</sup> <a name="initial_password_input" id="@cdktf/provider-ad.user.User.property.initialPasswordInput"></a>

```python
initial_password_input: str
```

- *Type:* str

---

##### `initials_input`<sup>Optional</sup> <a name="initials_input" id="@cdktf/provider-ad.user.User.property.initialsInput"></a>

```python
initials_input: str
```

- *Type:* str

---

##### `mobile_phone_input`<sup>Optional</sup> <a name="mobile_phone_input" id="@cdktf/provider-ad.user.User.property.mobilePhoneInput"></a>

```python
mobile_phone_input: str
```

- *Type:* str

---

##### `office_input`<sup>Optional</sup> <a name="office_input" id="@cdktf/provider-ad.user.User.property.officeInput"></a>

```python
office_input: str
```

- *Type:* str

---

##### `office_phone_input`<sup>Optional</sup> <a name="office_phone_input" id="@cdktf/provider-ad.user.User.property.officePhoneInput"></a>

```python
office_phone_input: str
```

- *Type:* str

---

##### `organization_input`<sup>Optional</sup> <a name="organization_input" id="@cdktf/provider-ad.user.User.property.organizationInput"></a>

```python
organization_input: str
```

- *Type:* str

---

##### `other_name_input`<sup>Optional</sup> <a name="other_name_input" id="@cdktf/provider-ad.user.User.property.otherNameInput"></a>

```python
other_name_input: str
```

- *Type:* str

---

##### `password_never_expires_input`<sup>Optional</sup> <a name="password_never_expires_input" id="@cdktf/provider-ad.user.User.property.passwordNeverExpiresInput"></a>

```python
password_never_expires_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `po_box_input`<sup>Optional</sup> <a name="po_box_input" id="@cdktf/provider-ad.user.User.property.poBoxInput"></a>

```python
po_box_input: str
```

- *Type:* str

---

##### `postal_code_input`<sup>Optional</sup> <a name="postal_code_input" id="@cdktf/provider-ad.user.User.property.postalCodeInput"></a>

```python
postal_code_input: str
```

- *Type:* str

---

##### `principal_name_input`<sup>Optional</sup> <a name="principal_name_input" id="@cdktf/provider-ad.user.User.property.principalNameInput"></a>

```python
principal_name_input: str
```

- *Type:* str

---

##### `sam_account_name_input`<sup>Optional</sup> <a name="sam_account_name_input" id="@cdktf/provider-ad.user.User.property.samAccountNameInput"></a>

```python
sam_account_name_input: str
```

- *Type:* str

---

##### `smart_card_logon_required_input`<sup>Optional</sup> <a name="smart_card_logon_required_input" id="@cdktf/provider-ad.user.User.property.smartCardLogonRequiredInput"></a>

```python
smart_card_logon_required_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="@cdktf/provider-ad.user.User.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `street_address_input`<sup>Optional</sup> <a name="street_address_input" id="@cdktf/provider-ad.user.User.property.streetAddressInput"></a>

```python
street_address_input: str
```

- *Type:* str

---

##### `surname_input`<sup>Optional</sup> <a name="surname_input" id="@cdktf/provider-ad.user.User.property.surnameInput"></a>

```python
surname_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-ad.user.User.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `trusted_for_delegation_input`<sup>Optional</sup> <a name="trusted_for_delegation_input" id="@cdktf/provider-ad.user.User.property.trustedForDelegationInput"></a>

```python
trusted_for_delegation_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cannot_change_password`<sup>Required</sup> <a name="cannot_change_password" id="@cdktf/provider-ad.user.User.property.cannotChangePassword"></a>

```python
cannot_change_password: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `city`<sup>Required</sup> <a name="city" id="@cdktf/provider-ad.user.User.property.city"></a>

```python
city: str
```

- *Type:* str

---

##### `company`<sup>Required</sup> <a name="company" id="@cdktf/provider-ad.user.User.property.company"></a>

```python
company: str
```

- *Type:* str

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktf/provider-ad.user.User.property.container"></a>

```python
container: str
```

- *Type:* str

---

##### `country`<sup>Required</sup> <a name="country" id="@cdktf/provider-ad.user.User.property.country"></a>

```python
country: str
```

- *Type:* str

---

##### `custom_attributes`<sup>Required</sup> <a name="custom_attributes" id="@cdktf/provider-ad.user.User.property.customAttributes"></a>

```python
custom_attributes: str
```

- *Type:* str

---

##### `department`<sup>Required</sup> <a name="department" id="@cdktf/provider-ad.user.User.property.department"></a>

```python
department: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-ad.user.User.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-ad.user.User.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `division`<sup>Required</sup> <a name="division" id="@cdktf/provider-ad.user.User.property.division"></a>

```python
division: str
```

- *Type:* str

---

##### `email_address`<sup>Required</sup> <a name="email_address" id="@cdktf/provider-ad.user.User.property.emailAddress"></a>

```python
email_address: str
```

- *Type:* str

---

##### `employee_id`<sup>Required</sup> <a name="employee_id" id="@cdktf/provider-ad.user.User.property.employeeId"></a>

```python
employee_id: str
```

- *Type:* str

---

##### `employee_number`<sup>Required</sup> <a name="employee_number" id="@cdktf/provider-ad.user.User.property.employeeNumber"></a>

```python
employee_number: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-ad.user.User.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `fax`<sup>Required</sup> <a name="fax" id="@cdktf/provider-ad.user.User.property.fax"></a>

```python
fax: str
```

- *Type:* str

---

##### `given_name`<sup>Required</sup> <a name="given_name" id="@cdktf/provider-ad.user.User.property.givenName"></a>

```python
given_name: str
```

- *Type:* str

---

##### `home_directory`<sup>Required</sup> <a name="home_directory" id="@cdktf/provider-ad.user.User.property.homeDirectory"></a>

```python
home_directory: str
```

- *Type:* str

---

##### `home_drive`<sup>Required</sup> <a name="home_drive" id="@cdktf/provider-ad.user.User.property.homeDrive"></a>

```python
home_drive: str
```

- *Type:* str

---

##### `home_page`<sup>Required</sup> <a name="home_page" id="@cdktf/provider-ad.user.User.property.homePage"></a>

```python
home_page: str
```

- *Type:* str

---

##### `home_phone`<sup>Required</sup> <a name="home_phone" id="@cdktf/provider-ad.user.User.property.homePhone"></a>

```python
home_phone: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ad.user.User.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `initial_password`<sup>Required</sup> <a name="initial_password" id="@cdktf/provider-ad.user.User.property.initialPassword"></a>

```python
initial_password: str
```

- *Type:* str

---

##### `initials`<sup>Required</sup> <a name="initials" id="@cdktf/provider-ad.user.User.property.initials"></a>

```python
initials: str
```

- *Type:* str

---

##### `mobile_phone`<sup>Required</sup> <a name="mobile_phone" id="@cdktf/provider-ad.user.User.property.mobilePhone"></a>

```python
mobile_phone: str
```

- *Type:* str

---

##### `office`<sup>Required</sup> <a name="office" id="@cdktf/provider-ad.user.User.property.office"></a>

```python
office: str
```

- *Type:* str

---

##### `office_phone`<sup>Required</sup> <a name="office_phone" id="@cdktf/provider-ad.user.User.property.officePhone"></a>

```python
office_phone: str
```

- *Type:* str

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-ad.user.User.property.organization"></a>

```python
organization: str
```

- *Type:* str

---

##### `other_name`<sup>Required</sup> <a name="other_name" id="@cdktf/provider-ad.user.User.property.otherName"></a>

```python
other_name: str
```

- *Type:* str

---

##### `password_never_expires`<sup>Required</sup> <a name="password_never_expires" id="@cdktf/provider-ad.user.User.property.passwordNeverExpires"></a>

```python
password_never_expires: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `po_box`<sup>Required</sup> <a name="po_box" id="@cdktf/provider-ad.user.User.property.poBox"></a>

```python
po_box: str
```

- *Type:* str

---

##### `postal_code`<sup>Required</sup> <a name="postal_code" id="@cdktf/provider-ad.user.User.property.postalCode"></a>

```python
postal_code: str
```

- *Type:* str

---

##### `principal_name`<sup>Required</sup> <a name="principal_name" id="@cdktf/provider-ad.user.User.property.principalName"></a>

```python
principal_name: str
```

- *Type:* str

---

##### `sam_account_name`<sup>Required</sup> <a name="sam_account_name" id="@cdktf/provider-ad.user.User.property.samAccountName"></a>

```python
sam_account_name: str
```

- *Type:* str

---

##### `smart_card_logon_required`<sup>Required</sup> <a name="smart_card_logon_required" id="@cdktf/provider-ad.user.User.property.smartCardLogonRequired"></a>

```python
smart_card_logon_required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-ad.user.User.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `street_address`<sup>Required</sup> <a name="street_address" id="@cdktf/provider-ad.user.User.property.streetAddress"></a>

```python
street_address: str
```

- *Type:* str

---

##### `surname`<sup>Required</sup> <a name="surname" id="@cdktf/provider-ad.user.User.property.surname"></a>

```python
surname: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-ad.user.User.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `trusted_for_delegation`<sup>Required</sup> <a name="trusted_for_delegation" id="@cdktf/provider-ad.user.User.property.trustedForDelegation"></a>

```python
trusted_for_delegation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.user.User.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ad.user.User.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### UserConfig <a name="UserConfig" id="@cdktf/provider-ad.user.UserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ad.user.UserConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_ad import user

user.UserConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  display_name: str,
  principal_name: str,
  sam_account_name: str,
  cannot_change_password: typing.Union[bool, IResolvable] = None,
  city: str = None,
  company: str = None,
  container: str = None,
  country: str = None,
  custom_attributes: str = None,
  department: str = None,
  description: str = None,
  division: str = None,
  email_address: str = None,
  employee_id: str = None,
  employee_number: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  fax: str = None,
  given_name: str = None,
  home_directory: str = None,
  home_drive: str = None,
  home_page: str = None,
  home_phone: str = None,
  id: str = None,
  initial_password: str = None,
  initials: str = None,
  mobile_phone: str = None,
  office: str = None,
  office_phone: str = None,
  organization: str = None,
  other_name: str = None,
  password_never_expires: typing.Union[bool, IResolvable] = None,
  po_box: str = None,
  postal_code: str = None,
  smart_card_logon_required: typing.Union[bool, IResolvable] = None,
  state: str = None,
  street_address: str = None,
  surname: str = None,
  title: str = None,
  trusted_for_delegation: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.displayName">display_name</a></code> | <code>str</code> | The Display Name of an Active Directory user. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.principalName">principal_name</a></code> | <code>str</code> | The Principal Name of an Active Directory user. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.samAccountName">sam_account_name</a></code> | <code>str</code> | The pre-win2k user logon name. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.cannotChangePassword">cannot_change_password</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to true, the user will not be allowed to change their password. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.city">city</a></code> | <code>str</code> | Specifies the user's town or city. This parameter sets the City property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.company">company</a></code> | <code>str</code> | Specifies the user's company. This parameter sets the Company property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.container">container</a></code> | <code>str</code> | A DN of the container object that will be holding the user. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.country">country</a></code> | <code>str</code> | Specifies the country by setting the country code (refer to ISO 3166). |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.customAttributes">custom_attributes</a></code> | <code>str</code> | JSON encoded map that represents key/value pairs for custom attributes. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.department">department</a></code> | <code>str</code> | Specifies the user's department. This parameter sets the Department property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.description">description</a></code> | <code>str</code> | Specifies a description of the object. This parameter sets the value of the Description property for the user object. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.division">division</a></code> | <code>str</code> | Specifies the user's division. This parameter sets the Division property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.emailAddress">email_address</a></code> | <code>str</code> | Specifies the user's e-mail address. This parameter sets the EmailAddress property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.employeeId">employee_id</a></code> | <code>str</code> | Specifies the user's employee ID. This parameter sets the EmployeeID property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.employeeNumber">employee_number</a></code> | <code>str</code> | Specifies the user's employee number. This parameter sets the EmployeeNumber property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to false, the user will be disabled. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.fax">fax</a></code> | <code>str</code> | Specifies the user's fax phone number. This parameter sets the Fax property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.givenName">given_name</a></code> | <code>str</code> | Specifies the user's given name. This parameter sets the GivenName property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.homeDirectory">home_directory</a></code> | <code>str</code> | Specifies a user's home directory. This parameter sets the HomeDirectory property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.homeDrive">home_drive</a></code> | <code>str</code> | Specifies a drive that is associated with the UNC path defined by the HomeDirectory property. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.homePage">home_page</a></code> | <code>str</code> | Specifies the URL of the home page of the object. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.homePhone">home_phone</a></code> | <code>str</code> | Specifies the user's home telephone number. This parameter sets the HomePhone property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#id User#id}. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.initialPassword">initial_password</a></code> | <code>str</code> | The user's initial password. This will be set on creation but will *not* be enforced in subsequent plans. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.initials">initials</a></code> | <code>str</code> | Specifies the initials that represent part of a user's name. Maximum 6 char. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.mobilePhone">mobile_phone</a></code> | <code>str</code> | Specifies the user's mobile phone number. This parameter sets the MobilePhone property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.office">office</a></code> | <code>str</code> | Specifies the location of the user's office or place of business. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.officePhone">office_phone</a></code> | <code>str</code> | Specifies the user's office telephone number. This parameter sets the OfficePhone property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.organization">organization</a></code> | <code>str</code> | Specifies the user's organization. This parameter sets the Organization property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.otherName">other_name</a></code> | <code>str</code> | Specifies a name in addition to a user's given name and surname, such as the user's middle name. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.passwordNeverExpires">password_never_expires</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to true, the password for this user will not expire. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.poBox">po_box</a></code> | <code>str</code> | Specifies the user's post office box number. This parameter sets the POBox property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.postalCode">postal_code</a></code> | <code>str</code> | Specifies the user's postal code or zip code. This parameter sets the PostalCode property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.smartCardLogonRequired">smart_card_logon_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to true, a smart card is required to logon. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.state">state</a></code> | <code>str</code> | Specifies the user's or Organizational Unit's state or province. This parameter sets the State property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.streetAddress">street_address</a></code> | <code>str</code> | Specifies the user's street address. This parameter sets the StreetAddress property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.surname">surname</a></code> | <code>str</code> | Specifies the user's last name or surname. This parameter sets the Surname property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.title">title</a></code> | <code>str</code> | Specifies the user's title. This parameter sets the Title property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.trustedForDelegation">trusted_for_delegation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to true, the user account is trusted for Kerberos delegation. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ad.user.UserConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ad.user.UserConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ad.user.UserConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ad.user.UserConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ad.user.UserConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ad.user.UserConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ad.user.UserConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-ad.user.UserConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The Display Name of an Active Directory user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#display_name User#display_name}

---

##### `principal_name`<sup>Required</sup> <a name="principal_name" id="@cdktf/provider-ad.user.UserConfig.property.principalName"></a>

```python
principal_name: str
```

- *Type:* str

The Principal Name of an Active Directory user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#principal_name User#principal_name}

---

##### `sam_account_name`<sup>Required</sup> <a name="sam_account_name" id="@cdktf/provider-ad.user.UserConfig.property.samAccountName"></a>

```python
sam_account_name: str
```

- *Type:* str

The pre-win2k user logon name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#sam_account_name User#sam_account_name}

---

##### `cannot_change_password`<sup>Optional</sup> <a name="cannot_change_password" id="@cdktf/provider-ad.user.UserConfig.property.cannotChangePassword"></a>

```python
cannot_change_password: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, the user will not be allowed to change their password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#cannot_change_password User#cannot_change_password}

---

##### `city`<sup>Optional</sup> <a name="city" id="@cdktf/provider-ad.user.UserConfig.property.city"></a>

```python
city: str
```

- *Type:* str

Specifies the user's town or city. This parameter sets the City property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#city User#city}

---

##### `company`<sup>Optional</sup> <a name="company" id="@cdktf/provider-ad.user.UserConfig.property.company"></a>

```python
company: str
```

- *Type:* str

Specifies the user's company. This parameter sets the Company property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#company User#company}

---

##### `container`<sup>Optional</sup> <a name="container" id="@cdktf/provider-ad.user.UserConfig.property.container"></a>

```python
container: str
```

- *Type:* str

A DN of the container object that will be holding the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#container User#container}

---

##### `country`<sup>Optional</sup> <a name="country" id="@cdktf/provider-ad.user.UserConfig.property.country"></a>

```python
country: str
```

- *Type:* str

Specifies the country by setting the country code (refer to ISO 3166).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#country User#country}

---

##### `custom_attributes`<sup>Optional</sup> <a name="custom_attributes" id="@cdktf/provider-ad.user.UserConfig.property.customAttributes"></a>

```python
custom_attributes: str
```

- *Type:* str

JSON encoded map that represents key/value pairs for custom attributes.

Please note that `terraform import` will not import these attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#custom_attributes User#custom_attributes}

---

##### `department`<sup>Optional</sup> <a name="department" id="@cdktf/provider-ad.user.UserConfig.property.department"></a>

```python
department: str
```

- *Type:* str

Specifies the user's department. This parameter sets the Department property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#department User#department}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-ad.user.UserConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Specifies a description of the object. This parameter sets the value of the Description property for the user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#description User#description}

---

##### `division`<sup>Optional</sup> <a name="division" id="@cdktf/provider-ad.user.UserConfig.property.division"></a>

```python
division: str
```

- *Type:* str

Specifies the user's division. This parameter sets the Division property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#division User#division}

---

##### `email_address`<sup>Optional</sup> <a name="email_address" id="@cdktf/provider-ad.user.UserConfig.property.emailAddress"></a>

```python
email_address: str
```

- *Type:* str

Specifies the user's e-mail address. This parameter sets the EmailAddress property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#email_address User#email_address}

---

##### `employee_id`<sup>Optional</sup> <a name="employee_id" id="@cdktf/provider-ad.user.UserConfig.property.employeeId"></a>

```python
employee_id: str
```

- *Type:* str

Specifies the user's employee ID. This parameter sets the EmployeeID property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#employee_id User#employee_id}

---

##### `employee_number`<sup>Optional</sup> <a name="employee_number" id="@cdktf/provider-ad.user.UserConfig.property.employeeNumber"></a>

```python
employee_number: str
```

- *Type:* str

Specifies the user's employee number. This parameter sets the EmployeeNumber property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#employee_number User#employee_number}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-ad.user.UserConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to false, the user will be disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#enabled User#enabled}

---

##### `fax`<sup>Optional</sup> <a name="fax" id="@cdktf/provider-ad.user.UserConfig.property.fax"></a>

```python
fax: str
```

- *Type:* str

Specifies the user's fax phone number. This parameter sets the Fax property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#fax User#fax}

---

##### `given_name`<sup>Optional</sup> <a name="given_name" id="@cdktf/provider-ad.user.UserConfig.property.givenName"></a>

```python
given_name: str
```

- *Type:* str

Specifies the user's given name. This parameter sets the GivenName property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#given_name User#given_name}

---

##### `home_directory`<sup>Optional</sup> <a name="home_directory" id="@cdktf/provider-ad.user.UserConfig.property.homeDirectory"></a>

```python
home_directory: str
```

- *Type:* str

Specifies a user's home directory. This parameter sets the HomeDirectory property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#home_directory User#home_directory}

---

##### `home_drive`<sup>Optional</sup> <a name="home_drive" id="@cdktf/provider-ad.user.UserConfig.property.homeDrive"></a>

```python
home_drive: str
```

- *Type:* str

Specifies a drive that is associated with the UNC path defined by the HomeDirectory property.

The drive letter is specified as <DriveLetter>: where <DriveLetter> indicates the letter of the drive to associate. The <DriveLetter> must be a single, uppercase letter and the colon is required. This parameter sets the HomeDrive property of the user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#home_drive User#home_drive}

---

##### `home_page`<sup>Optional</sup> <a name="home_page" id="@cdktf/provider-ad.user.UserConfig.property.homePage"></a>

```python
home_page: str
```

- *Type:* str

Specifies the URL of the home page of the object.

This parameter sets the homePage property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#home_page User#home_page}

---

##### `home_phone`<sup>Optional</sup> <a name="home_phone" id="@cdktf/provider-ad.user.UserConfig.property.homePhone"></a>

```python
home_phone: str
```

- *Type:* str

Specifies the user's home telephone number. This parameter sets the HomePhone property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#home_phone User#home_phone}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ad.user.UserConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#id User#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initial_password`<sup>Optional</sup> <a name="initial_password" id="@cdktf/provider-ad.user.UserConfig.property.initialPassword"></a>

```python
initial_password: str
```

- *Type:* str

The user's initial password. This will be set on creation but will *not* be enforced in subsequent plans.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#initial_password User#initial_password}

---

##### `initials`<sup>Optional</sup> <a name="initials" id="@cdktf/provider-ad.user.UserConfig.property.initials"></a>

```python
initials: str
```

- *Type:* str

Specifies the initials that represent part of a user's name. Maximum 6 char.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#initials User#initials}

---

##### `mobile_phone`<sup>Optional</sup> <a name="mobile_phone" id="@cdktf/provider-ad.user.UserConfig.property.mobilePhone"></a>

```python
mobile_phone: str
```

- *Type:* str

Specifies the user's mobile phone number. This parameter sets the MobilePhone property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#mobile_phone User#mobile_phone}

---

##### `office`<sup>Optional</sup> <a name="office" id="@cdktf/provider-ad.user.UserConfig.property.office"></a>

```python
office: str
```

- *Type:* str

Specifies the location of the user's office or place of business.

This parameter sets the Office property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#office User#office}

---

##### `office_phone`<sup>Optional</sup> <a name="office_phone" id="@cdktf/provider-ad.user.UserConfig.property.officePhone"></a>

```python
office_phone: str
```

- *Type:* str

Specifies the user's office telephone number. This parameter sets the OfficePhone property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#office_phone User#office_phone}

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-ad.user.UserConfig.property.organization"></a>

```python
organization: str
```

- *Type:* str

Specifies the user's organization. This parameter sets the Organization property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#organization User#organization}

---

##### `other_name`<sup>Optional</sup> <a name="other_name" id="@cdktf/provider-ad.user.UserConfig.property.otherName"></a>

```python
other_name: str
```

- *Type:* str

Specifies a name in addition to a user's given name and surname, such as the user's middle name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#other_name User#other_name}

---

##### `password_never_expires`<sup>Optional</sup> <a name="password_never_expires" id="@cdktf/provider-ad.user.UserConfig.property.passwordNeverExpires"></a>

```python
password_never_expires: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, the password for this user will not expire.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#password_never_expires User#password_never_expires}

---

##### `po_box`<sup>Optional</sup> <a name="po_box" id="@cdktf/provider-ad.user.UserConfig.property.poBox"></a>

```python
po_box: str
```

- *Type:* str

Specifies the user's post office box number. This parameter sets the POBox property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#po_box User#po_box}

---

##### `postal_code`<sup>Optional</sup> <a name="postal_code" id="@cdktf/provider-ad.user.UserConfig.property.postalCode"></a>

```python
postal_code: str
```

- *Type:* str

Specifies the user's postal code or zip code. This parameter sets the PostalCode property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#postal_code User#postal_code}

---

##### `smart_card_logon_required`<sup>Optional</sup> <a name="smart_card_logon_required" id="@cdktf/provider-ad.user.UserConfig.property.smartCardLogonRequired"></a>

```python
smart_card_logon_required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, a smart card is required to logon.

This parameter sets the SmartCardLoginRequired property for a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#smart_card_logon_required User#smart_card_logon_required}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-ad.user.UserConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Specifies the user's or Organizational Unit's state or province. This parameter sets the State property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#state User#state}

---

##### `street_address`<sup>Optional</sup> <a name="street_address" id="@cdktf/provider-ad.user.UserConfig.property.streetAddress"></a>

```python
street_address: str
```

- *Type:* str

Specifies the user's street address. This parameter sets the StreetAddress property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#street_address User#street_address}

---

##### `surname`<sup>Optional</sup> <a name="surname" id="@cdktf/provider-ad.user.UserConfig.property.surname"></a>

```python
surname: str
```

- *Type:* str

Specifies the user's last name or surname. This parameter sets the Surname property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#surname User#surname}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-ad.user.UserConfig.property.title"></a>

```python
title: str
```

- *Type:* str

Specifies the user's title. This parameter sets the Title property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#title User#title}

---

##### `trusted_for_delegation`<sup>Optional</sup> <a name="trusted_for_delegation" id="@cdktf/provider-ad.user.UserConfig.property.trustedForDelegation"></a>

```python
trusted_for_delegation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, the user account is trusted for Kerberos delegation.

A service that runs under an account that is trusted for Kerberos delegation can assume the identity of a client requesting the service. This parameter sets the TrustedForDelegation property of an account object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#trusted_for_delegation User#trusted_for_delegation}

---



