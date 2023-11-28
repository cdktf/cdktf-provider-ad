# `user` Submodule <a name="`user` Submodule" id="@cdktf/provider-ad.user"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### User <a name="User" id="@cdktf/provider-ad.user.User"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user ad_user}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ad.user.User.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ad.user.User;

User.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .displayName(java.lang.String)
    .principalName(java.lang.String)
    .samAccountName(java.lang.String)
//  .cannotChangePassword(java.lang.Boolean)
//  .cannotChangePassword(IResolvable)
//  .city(java.lang.String)
//  .company(java.lang.String)
//  .container(java.lang.String)
//  .country(java.lang.String)
//  .customAttributes(java.lang.String)
//  .department(java.lang.String)
//  .description(java.lang.String)
//  .division(java.lang.String)
//  .emailAddress(java.lang.String)
//  .employeeId(java.lang.String)
//  .employeeNumber(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .fax(java.lang.String)
//  .givenName(java.lang.String)
//  .homeDirectory(java.lang.String)
//  .homeDrive(java.lang.String)
//  .homePage(java.lang.String)
//  .homePhone(java.lang.String)
//  .id(java.lang.String)
//  .initialPassword(java.lang.String)
//  .initials(java.lang.String)
//  .mobilePhone(java.lang.String)
//  .office(java.lang.String)
//  .officePhone(java.lang.String)
//  .organization(java.lang.String)
//  .otherName(java.lang.String)
//  .passwordNeverExpires(java.lang.Boolean)
//  .passwordNeverExpires(IResolvable)
//  .poBox(java.lang.String)
//  .postalCode(java.lang.String)
//  .smartCardLogonRequired(java.lang.Boolean)
//  .smartCardLogonRequired(IResolvable)
//  .state(java.lang.String)
//  .streetAddress(java.lang.String)
//  .surname(java.lang.String)
//  .title(java.lang.String)
//  .trustedForDelegation(java.lang.Boolean)
//  .trustedForDelegation(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.user.User.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ad.user.User.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ad.user.User.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | The Display Name of an Active Directory user. |
| <code><a href="#@cdktf/provider-ad.user.User.Initializer.parameter.principalName">principalName</a></code> | <code>java.lang.String</code> | The Principal Name of an Active Directory user. |
| <code><a href="#@cdktf/provider-ad.user.User.Initializer.parameter.samAccountName">samAccountName</a></code> | <code>java.lang.String</code> | The pre-win2k user logon name. |
| <code><a href="#@cdktf/provider-ad.user.User.Initializer.parameter.cannotChangePassword">cannotChangePassword</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set to true, the user will not be allowed to change their password. |
| <code><a href="#@cdktf/provider-ad.user.User.Initializer.parameter.city">city</a></code> | <code>java.lang.String</code> | Specifies the user's town or city. This parameter sets the City property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.User.Initializer.parameter.company">company</a></code> | <code>java.lang.String</code> | Specifies the user's company. This parameter sets the Company property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.User.Initializer.parameter.container">container</a></code> | <code>java.lang.String</code> | A DN of the container object that will be holding the user. |
| <code><a href="#@cdktf/provider-ad.user.User.Initializer.parameter.country">country</a></code> | <code>java.lang.String</code> | Specifies the country by setting the country code (refer to ISO 3166). |
| <code><a href="#@cdktf/provider-ad.user.User.Initializer.parameter.customAttributes">customAttributes</a></code> | <code>java.lang.String</code> | JSON encoded map that represents key/value pairs for custom attributes. |
| <code><a href="#@cdktf/provider-ad.user.User.Initializer.parameter.department">department</a></code> | <code>java.lang.String</code> | Specifies the user's department. This parameter sets the Department property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.User.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Specifies a description of the object. This parameter sets the value of the Description property for the user object. |
| <code><a href="#@cdktf/provider-ad.user.User.Initializer.parameter.division">division</a></code> | <code>java.lang.String</code> | Specifies the user's division. This parameter sets the Division property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.User.Initializer.parameter.emailAddress">emailAddress</a></code> | <code>java.lang.String</code> | Specifies the user's e-mail address. This parameter sets the EmailAddress property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.User.Initializer.parameter.employeeId">employeeId</a></code> | <code>java.lang.String</code> | Specifies the user's employee ID. This parameter sets the EmployeeID property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.User.Initializer.parameter.employeeNumber">employeeNumber</a></code> | <code>java.lang.String</code> | Specifies the user's employee number. This parameter sets the EmployeeNumber property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.User.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set to false, the user will be disabled. |
| <code><a href="#@cdktf/provider-ad.user.User.Initializer.parameter.fax">fax</a></code> | <code>java.lang.String</code> | Specifies the user's fax phone number. This parameter sets the Fax property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.User.Initializer.parameter.givenName">givenName</a></code> | <code>java.lang.String</code> | Specifies the user's given name. This parameter sets the GivenName property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.User.Initializer.parameter.homeDirectory">homeDirectory</a></code> | <code>java.lang.String</code> | Specifies a user's home directory. This parameter sets the HomeDirectory property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.User.Initializer.parameter.homeDrive">homeDrive</a></code> | <code>java.lang.String</code> | Specifies a drive that is associated with the UNC path defined by the HomeDirectory property. |
| <code><a href="#@cdktf/provider-ad.user.User.Initializer.parameter.homePage">homePage</a></code> | <code>java.lang.String</code> | Specifies the URL of the home page of the object. |
| <code><a href="#@cdktf/provider-ad.user.User.Initializer.parameter.homePhone">homePhone</a></code> | <code>java.lang.String</code> | Specifies the user's home telephone number. This parameter sets the HomePhone property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.User.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#id User#id}. |
| <code><a href="#@cdktf/provider-ad.user.User.Initializer.parameter.initialPassword">initialPassword</a></code> | <code>java.lang.String</code> | The user's initial password. This will be set on creation but will *not* be enforced in subsequent plans. |
| <code><a href="#@cdktf/provider-ad.user.User.Initializer.parameter.initials">initials</a></code> | <code>java.lang.String</code> | Specifies the initials that represent part of a user's name. Maximum 6 char. |
| <code><a href="#@cdktf/provider-ad.user.User.Initializer.parameter.mobilePhone">mobilePhone</a></code> | <code>java.lang.String</code> | Specifies the user's mobile phone number. This parameter sets the MobilePhone property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.User.Initializer.parameter.office">office</a></code> | <code>java.lang.String</code> | Specifies the location of the user's office or place of business. |
| <code><a href="#@cdktf/provider-ad.user.User.Initializer.parameter.officePhone">officePhone</a></code> | <code>java.lang.String</code> | Specifies the user's office telephone number. This parameter sets the OfficePhone property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.User.Initializer.parameter.organization">organization</a></code> | <code>java.lang.String</code> | Specifies the user's organization. This parameter sets the Organization property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.User.Initializer.parameter.otherName">otherName</a></code> | <code>java.lang.String</code> | Specifies a name in addition to a user's given name and surname, such as the user's middle name. |
| <code><a href="#@cdktf/provider-ad.user.User.Initializer.parameter.passwordNeverExpires">passwordNeverExpires</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set to true, the password for this user will not expire. |
| <code><a href="#@cdktf/provider-ad.user.User.Initializer.parameter.poBox">poBox</a></code> | <code>java.lang.String</code> | Specifies the user's post office box number. This parameter sets the POBox property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.User.Initializer.parameter.postalCode">postalCode</a></code> | <code>java.lang.String</code> | Specifies the user's postal code or zip code. This parameter sets the PostalCode property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.User.Initializer.parameter.smartCardLogonRequired">smartCardLogonRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set to true, a smart card is required to logon. |
| <code><a href="#@cdktf/provider-ad.user.User.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Specifies the user's or Organizational Unit's state or province. This parameter sets the State property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.User.Initializer.parameter.streetAddress">streetAddress</a></code> | <code>java.lang.String</code> | Specifies the user's street address. This parameter sets the StreetAddress property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.User.Initializer.parameter.surname">surname</a></code> | <code>java.lang.String</code> | Specifies the user's last name or surname. This parameter sets the Surname property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.User.Initializer.parameter.title">title</a></code> | <code>java.lang.String</code> | Specifies the user's title. This parameter sets the Title property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.User.Initializer.parameter.trustedForDelegation">trustedForDelegation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set to true, the user account is trusted for Kerberos delegation. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ad.user.User.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ad.user.User.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ad.user.User.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ad.user.User.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ad.user.User.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ad.user.User.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ad.user.User.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ad.user.User.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ad.user.User.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-ad.user.User.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

The Display Name of an Active Directory user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#display_name User#display_name}

---

##### `principalName`<sup>Required</sup> <a name="principalName" id="@cdktf/provider-ad.user.User.Initializer.parameter.principalName"></a>

- *Type:* java.lang.String

The Principal Name of an Active Directory user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#principal_name User#principal_name}

---

##### `samAccountName`<sup>Required</sup> <a name="samAccountName" id="@cdktf/provider-ad.user.User.Initializer.parameter.samAccountName"></a>

- *Type:* java.lang.String

The pre-win2k user logon name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#sam_account_name User#sam_account_name}

---

##### `cannotChangePassword`<sup>Optional</sup> <a name="cannotChangePassword" id="@cdktf/provider-ad.user.User.Initializer.parameter.cannotChangePassword"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set to true, the user will not be allowed to change their password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#cannot_change_password User#cannot_change_password}

---

##### `city`<sup>Optional</sup> <a name="city" id="@cdktf/provider-ad.user.User.Initializer.parameter.city"></a>

- *Type:* java.lang.String

Specifies the user's town or city. This parameter sets the City property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#city User#city}

---

##### `company`<sup>Optional</sup> <a name="company" id="@cdktf/provider-ad.user.User.Initializer.parameter.company"></a>

- *Type:* java.lang.String

Specifies the user's company. This parameter sets the Company property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#company User#company}

---

##### `container`<sup>Optional</sup> <a name="container" id="@cdktf/provider-ad.user.User.Initializer.parameter.container"></a>

- *Type:* java.lang.String

A DN of the container object that will be holding the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#container User#container}

---

##### `country`<sup>Optional</sup> <a name="country" id="@cdktf/provider-ad.user.User.Initializer.parameter.country"></a>

- *Type:* java.lang.String

Specifies the country by setting the country code (refer to ISO 3166).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#country User#country}

---

##### `customAttributes`<sup>Optional</sup> <a name="customAttributes" id="@cdktf/provider-ad.user.User.Initializer.parameter.customAttributes"></a>

- *Type:* java.lang.String

JSON encoded map that represents key/value pairs for custom attributes.

Please note that `terraform import` will not import these attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#custom_attributes User#custom_attributes}

---

##### `department`<sup>Optional</sup> <a name="department" id="@cdktf/provider-ad.user.User.Initializer.parameter.department"></a>

- *Type:* java.lang.String

Specifies the user's department. This parameter sets the Department property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#department User#department}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-ad.user.User.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Specifies a description of the object. This parameter sets the value of the Description property for the user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#description User#description}

---

##### `division`<sup>Optional</sup> <a name="division" id="@cdktf/provider-ad.user.User.Initializer.parameter.division"></a>

- *Type:* java.lang.String

Specifies the user's division. This parameter sets the Division property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#division User#division}

---

##### `emailAddress`<sup>Optional</sup> <a name="emailAddress" id="@cdktf/provider-ad.user.User.Initializer.parameter.emailAddress"></a>

- *Type:* java.lang.String

Specifies the user's e-mail address. This parameter sets the EmailAddress property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#email_address User#email_address}

---

##### `employeeId`<sup>Optional</sup> <a name="employeeId" id="@cdktf/provider-ad.user.User.Initializer.parameter.employeeId"></a>

- *Type:* java.lang.String

Specifies the user's employee ID. This parameter sets the EmployeeID property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#employee_id User#employee_id}

---

##### `employeeNumber`<sup>Optional</sup> <a name="employeeNumber" id="@cdktf/provider-ad.user.User.Initializer.parameter.employeeNumber"></a>

- *Type:* java.lang.String

Specifies the user's employee number. This parameter sets the EmployeeNumber property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#employee_number User#employee_number}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-ad.user.User.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set to false, the user will be disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#enabled User#enabled}

---

##### `fax`<sup>Optional</sup> <a name="fax" id="@cdktf/provider-ad.user.User.Initializer.parameter.fax"></a>

- *Type:* java.lang.String

Specifies the user's fax phone number. This parameter sets the Fax property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#fax User#fax}

---

##### `givenName`<sup>Optional</sup> <a name="givenName" id="@cdktf/provider-ad.user.User.Initializer.parameter.givenName"></a>

- *Type:* java.lang.String

Specifies the user's given name. This parameter sets the GivenName property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#given_name User#given_name}

---

##### `homeDirectory`<sup>Optional</sup> <a name="homeDirectory" id="@cdktf/provider-ad.user.User.Initializer.parameter.homeDirectory"></a>

- *Type:* java.lang.String

Specifies a user's home directory. This parameter sets the HomeDirectory property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#home_directory User#home_directory}

---

##### `homeDrive`<sup>Optional</sup> <a name="homeDrive" id="@cdktf/provider-ad.user.User.Initializer.parameter.homeDrive"></a>

- *Type:* java.lang.String

Specifies a drive that is associated with the UNC path defined by the HomeDirectory property.

The drive letter is specified as <DriveLetter>: where <DriveLetter> indicates the letter of the drive to associate. The <DriveLetter> must be a single, uppercase letter and the colon is required. This parameter sets the HomeDrive property of the user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#home_drive User#home_drive}

---

##### `homePage`<sup>Optional</sup> <a name="homePage" id="@cdktf/provider-ad.user.User.Initializer.parameter.homePage"></a>

- *Type:* java.lang.String

Specifies the URL of the home page of the object.

This parameter sets the homePage property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#home_page User#home_page}

---

##### `homePhone`<sup>Optional</sup> <a name="homePhone" id="@cdktf/provider-ad.user.User.Initializer.parameter.homePhone"></a>

- *Type:* java.lang.String

Specifies the user's home telephone number. This parameter sets the HomePhone property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#home_phone User#home_phone}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ad.user.User.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#id User#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initialPassword`<sup>Optional</sup> <a name="initialPassword" id="@cdktf/provider-ad.user.User.Initializer.parameter.initialPassword"></a>

- *Type:* java.lang.String

The user's initial password. This will be set on creation but will *not* be enforced in subsequent plans.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#initial_password User#initial_password}

---

##### `initials`<sup>Optional</sup> <a name="initials" id="@cdktf/provider-ad.user.User.Initializer.parameter.initials"></a>

- *Type:* java.lang.String

Specifies the initials that represent part of a user's name. Maximum 6 char.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#initials User#initials}

---

##### `mobilePhone`<sup>Optional</sup> <a name="mobilePhone" id="@cdktf/provider-ad.user.User.Initializer.parameter.mobilePhone"></a>

- *Type:* java.lang.String

Specifies the user's mobile phone number. This parameter sets the MobilePhone property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#mobile_phone User#mobile_phone}

---

##### `office`<sup>Optional</sup> <a name="office" id="@cdktf/provider-ad.user.User.Initializer.parameter.office"></a>

- *Type:* java.lang.String

Specifies the location of the user's office or place of business.

This parameter sets the Office property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#office User#office}

---

##### `officePhone`<sup>Optional</sup> <a name="officePhone" id="@cdktf/provider-ad.user.User.Initializer.parameter.officePhone"></a>

- *Type:* java.lang.String

Specifies the user's office telephone number. This parameter sets the OfficePhone property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#office_phone User#office_phone}

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-ad.user.User.Initializer.parameter.organization"></a>

- *Type:* java.lang.String

Specifies the user's organization. This parameter sets the Organization property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#organization User#organization}

---

##### `otherName`<sup>Optional</sup> <a name="otherName" id="@cdktf/provider-ad.user.User.Initializer.parameter.otherName"></a>

- *Type:* java.lang.String

Specifies a name in addition to a user's given name and surname, such as the user's middle name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#other_name User#other_name}

---

##### `passwordNeverExpires`<sup>Optional</sup> <a name="passwordNeverExpires" id="@cdktf/provider-ad.user.User.Initializer.parameter.passwordNeverExpires"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set to true, the password for this user will not expire.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#password_never_expires User#password_never_expires}

---

##### `poBox`<sup>Optional</sup> <a name="poBox" id="@cdktf/provider-ad.user.User.Initializer.parameter.poBox"></a>

- *Type:* java.lang.String

Specifies the user's post office box number. This parameter sets the POBox property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#po_box User#po_box}

---

##### `postalCode`<sup>Optional</sup> <a name="postalCode" id="@cdktf/provider-ad.user.User.Initializer.parameter.postalCode"></a>

- *Type:* java.lang.String

Specifies the user's postal code or zip code. This parameter sets the PostalCode property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#postal_code User#postal_code}

---

##### `smartCardLogonRequired`<sup>Optional</sup> <a name="smartCardLogonRequired" id="@cdktf/provider-ad.user.User.Initializer.parameter.smartCardLogonRequired"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set to true, a smart card is required to logon.

This parameter sets the SmartCardLoginRequired property for a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#smart_card_logon_required User#smart_card_logon_required}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-ad.user.User.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Specifies the user's or Organizational Unit's state or province. This parameter sets the State property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#state User#state}

---

##### `streetAddress`<sup>Optional</sup> <a name="streetAddress" id="@cdktf/provider-ad.user.User.Initializer.parameter.streetAddress"></a>

- *Type:* java.lang.String

Specifies the user's street address. This parameter sets the StreetAddress property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#street_address User#street_address}

---

##### `surname`<sup>Optional</sup> <a name="surname" id="@cdktf/provider-ad.user.User.Initializer.parameter.surname"></a>

- *Type:* java.lang.String

Specifies the user's last name or surname. This parameter sets the Surname property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#surname User#surname}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-ad.user.User.Initializer.parameter.title"></a>

- *Type:* java.lang.String

Specifies the user's title. This parameter sets the Title property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#title User#title}

---

##### `trustedForDelegation`<sup>Optional</sup> <a name="trustedForDelegation" id="@cdktf/provider-ad.user.User.Initializer.parameter.trustedForDelegation"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set to true, the user account is trusted for Kerberos delegation.

A service that runs under an account that is trusted for Kerberos delegation can assume the identity of a client requesting the service. This parameter sets the TrustedForDelegation property of an account object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#trusted_for_delegation User#trusted_for_delegation}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.user.User.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ad.user.User.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ad.user.User.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ad.user.User.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ad.user.User.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-ad.user.User.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-ad.user.User.resetCannotChangePassword">resetCannotChangePassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetCity">resetCity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetCompany">resetCompany</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetContainer">resetContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetCountry">resetCountry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetCustomAttributes">resetCustomAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetDepartment">resetDepartment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetDivision">resetDivision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetEmailAddress">resetEmailAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetEmployeeId">resetEmployeeId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetEmployeeNumber">resetEmployeeNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetFax">resetFax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetGivenName">resetGivenName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetHomeDirectory">resetHomeDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetHomeDrive">resetHomeDrive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetHomePage">resetHomePage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetHomePhone">resetHomePhone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetInitialPassword">resetInitialPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetInitials">resetInitials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetMobilePhone">resetMobilePhone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetOffice">resetOffice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetOfficePhone">resetOfficePhone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetOrganization">resetOrganization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetOtherName">resetOtherName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetPasswordNeverExpires">resetPasswordNeverExpires</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetPoBox">resetPoBox</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetPostalCode">resetPostalCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetSmartCardLogonRequired">resetSmartCardLogonRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetState">resetState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetStreetAddress">resetStreetAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetSurname">resetSurname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetTitle">resetTitle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.resetTrustedForDelegation">resetTrustedForDelegation</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-ad.user.User.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-ad.user.User.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ad.user.User.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ad.user.User.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-ad.user.User.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ad.user.User.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-ad.user.User.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-ad.user.User.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-ad.user.User.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-ad.user.User.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ad.user.User.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ad.user.User.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.user.User.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ad.user.User.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.user.User.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ad.user.User.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.user.User.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ad.user.User.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.user.User.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ad.user.User.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.user.User.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ad.user.User.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.user.User.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ad.user.User.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.user.User.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ad.user.User.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.user.User.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ad.user.User.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.user.User.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-ad.user.User.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ad.user.User.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ad.user.User.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ad.user.User.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ad.user.User.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-ad.user.User.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ad.user.User.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-ad.user.User.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `resetCannotChangePassword` <a name="resetCannotChangePassword" id="@cdktf/provider-ad.user.User.resetCannotChangePassword"></a>

```java
public void resetCannotChangePassword()
```

##### `resetCity` <a name="resetCity" id="@cdktf/provider-ad.user.User.resetCity"></a>

```java
public void resetCity()
```

##### `resetCompany` <a name="resetCompany" id="@cdktf/provider-ad.user.User.resetCompany"></a>

```java
public void resetCompany()
```

##### `resetContainer` <a name="resetContainer" id="@cdktf/provider-ad.user.User.resetContainer"></a>

```java
public void resetContainer()
```

##### `resetCountry` <a name="resetCountry" id="@cdktf/provider-ad.user.User.resetCountry"></a>

```java
public void resetCountry()
```

##### `resetCustomAttributes` <a name="resetCustomAttributes" id="@cdktf/provider-ad.user.User.resetCustomAttributes"></a>

```java
public void resetCustomAttributes()
```

##### `resetDepartment` <a name="resetDepartment" id="@cdktf/provider-ad.user.User.resetDepartment"></a>

```java
public void resetDepartment()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-ad.user.User.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDivision` <a name="resetDivision" id="@cdktf/provider-ad.user.User.resetDivision"></a>

```java
public void resetDivision()
```

##### `resetEmailAddress` <a name="resetEmailAddress" id="@cdktf/provider-ad.user.User.resetEmailAddress"></a>

```java
public void resetEmailAddress()
```

##### `resetEmployeeId` <a name="resetEmployeeId" id="@cdktf/provider-ad.user.User.resetEmployeeId"></a>

```java
public void resetEmployeeId()
```

##### `resetEmployeeNumber` <a name="resetEmployeeNumber" id="@cdktf/provider-ad.user.User.resetEmployeeNumber"></a>

```java
public void resetEmployeeNumber()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-ad.user.User.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetFax` <a name="resetFax" id="@cdktf/provider-ad.user.User.resetFax"></a>

```java
public void resetFax()
```

##### `resetGivenName` <a name="resetGivenName" id="@cdktf/provider-ad.user.User.resetGivenName"></a>

```java
public void resetGivenName()
```

##### `resetHomeDirectory` <a name="resetHomeDirectory" id="@cdktf/provider-ad.user.User.resetHomeDirectory"></a>

```java
public void resetHomeDirectory()
```

##### `resetHomeDrive` <a name="resetHomeDrive" id="@cdktf/provider-ad.user.User.resetHomeDrive"></a>

```java
public void resetHomeDrive()
```

##### `resetHomePage` <a name="resetHomePage" id="@cdktf/provider-ad.user.User.resetHomePage"></a>

```java
public void resetHomePage()
```

##### `resetHomePhone` <a name="resetHomePhone" id="@cdktf/provider-ad.user.User.resetHomePhone"></a>

```java
public void resetHomePhone()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-ad.user.User.resetId"></a>

```java
public void resetId()
```

##### `resetInitialPassword` <a name="resetInitialPassword" id="@cdktf/provider-ad.user.User.resetInitialPassword"></a>

```java
public void resetInitialPassword()
```

##### `resetInitials` <a name="resetInitials" id="@cdktf/provider-ad.user.User.resetInitials"></a>

```java
public void resetInitials()
```

##### `resetMobilePhone` <a name="resetMobilePhone" id="@cdktf/provider-ad.user.User.resetMobilePhone"></a>

```java
public void resetMobilePhone()
```

##### `resetOffice` <a name="resetOffice" id="@cdktf/provider-ad.user.User.resetOffice"></a>

```java
public void resetOffice()
```

##### `resetOfficePhone` <a name="resetOfficePhone" id="@cdktf/provider-ad.user.User.resetOfficePhone"></a>

```java
public void resetOfficePhone()
```

##### `resetOrganization` <a name="resetOrganization" id="@cdktf/provider-ad.user.User.resetOrganization"></a>

```java
public void resetOrganization()
```

##### `resetOtherName` <a name="resetOtherName" id="@cdktf/provider-ad.user.User.resetOtherName"></a>

```java
public void resetOtherName()
```

##### `resetPasswordNeverExpires` <a name="resetPasswordNeverExpires" id="@cdktf/provider-ad.user.User.resetPasswordNeverExpires"></a>

```java
public void resetPasswordNeverExpires()
```

##### `resetPoBox` <a name="resetPoBox" id="@cdktf/provider-ad.user.User.resetPoBox"></a>

```java
public void resetPoBox()
```

##### `resetPostalCode` <a name="resetPostalCode" id="@cdktf/provider-ad.user.User.resetPostalCode"></a>

```java
public void resetPostalCode()
```

##### `resetSmartCardLogonRequired` <a name="resetSmartCardLogonRequired" id="@cdktf/provider-ad.user.User.resetSmartCardLogonRequired"></a>

```java
public void resetSmartCardLogonRequired()
```

##### `resetState` <a name="resetState" id="@cdktf/provider-ad.user.User.resetState"></a>

```java
public void resetState()
```

##### `resetStreetAddress` <a name="resetStreetAddress" id="@cdktf/provider-ad.user.User.resetStreetAddress"></a>

```java
public void resetStreetAddress()
```

##### `resetSurname` <a name="resetSurname" id="@cdktf/provider-ad.user.User.resetSurname"></a>

```java
public void resetSurname()
```

##### `resetTitle` <a name="resetTitle" id="@cdktf/provider-ad.user.User.resetTitle"></a>

```java
public void resetTitle()
```

##### `resetTrustedForDelegation` <a name="resetTrustedForDelegation" id="@cdktf/provider-ad.user.User.resetTrustedForDelegation"></a>

```java
public void resetTrustedForDelegation()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ad.user.User.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ad.user.User.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a User resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-ad.user.User.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.ad.user.User;

User.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-ad.user.User.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.ad.user.User;

User.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ad.user.User.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-ad.user.User.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.ad.user.User;

User.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ad.user.User.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-ad.user.User.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.ad.user.User;

User.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),User.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a User resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ad.user.User.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-ad.user.User.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the User to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-ad.user.User.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing User that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ad.user.User.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the User to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.user.User.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ad.user.User.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.dn">dn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.sid">sid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.cannotChangePasswordInput">cannotChangePasswordInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.cityInput">cityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.companyInput">companyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.containerInput">containerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.countryInput">countryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.customAttributesInput">customAttributesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.departmentInput">departmentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.divisionInput">divisionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.emailAddressInput">emailAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.employeeIdInput">employeeIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.employeeNumberInput">employeeNumberInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.faxInput">faxInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.givenNameInput">givenNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.homeDirectoryInput">homeDirectoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.homeDriveInput">homeDriveInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.homePageInput">homePageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.homePhoneInput">homePhoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.initialPasswordInput">initialPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.initialsInput">initialsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.mobilePhoneInput">mobilePhoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.officeInput">officeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.officePhoneInput">officePhoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.organizationInput">organizationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.otherNameInput">otherNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.passwordNeverExpiresInput">passwordNeverExpiresInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.poBoxInput">poBoxInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.postalCodeInput">postalCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.principalNameInput">principalNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.samAccountNameInput">samAccountNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.smartCardLogonRequiredInput">smartCardLogonRequiredInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.streetAddressInput">streetAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.surnameInput">surnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.trustedForDelegationInput">trustedForDelegationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.cannotChangePassword">cannotChangePassword</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.city">city</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.company">company</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.container">container</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.country">country</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.customAttributes">customAttributes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.department">department</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.division">division</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.emailAddress">emailAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.employeeId">employeeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.employeeNumber">employeeNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.fax">fax</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.givenName">givenName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.homeDirectory">homeDirectory</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.homeDrive">homeDrive</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.homePage">homePage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.homePhone">homePhone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.initialPassword">initialPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.initials">initials</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.mobilePhone">mobilePhone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.office">office</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.officePhone">officePhone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.organization">organization</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.otherName">otherName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.passwordNeverExpires">passwordNeverExpires</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.poBox">poBox</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.postalCode">postalCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.principalName">principalName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.samAccountName">samAccountName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.smartCardLogonRequired">smartCardLogonRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.streetAddress">streetAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.surname">surname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.User.property.trustedForDelegation">trustedForDelegation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ad.user.User.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-ad.user.User.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ad.user.User.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-ad.user.User.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-ad.user.User.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-ad.user.User.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-ad.user.User.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ad.user.User.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ad.user.User.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ad.user.User.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ad.user.User.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ad.user.User.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ad.user.User.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ad.user.User.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dn`<sup>Required</sup> <a name="dn" id="@cdktf/provider-ad.user.User.property.dn"></a>

```java
public java.lang.String getDn();
```

- *Type:* java.lang.String

---

##### `sid`<sup>Required</sup> <a name="sid" id="@cdktf/provider-ad.user.User.property.sid"></a>

```java
public java.lang.String getSid();
```

- *Type:* java.lang.String

---

##### `cannotChangePasswordInput`<sup>Optional</sup> <a name="cannotChangePasswordInput" id="@cdktf/provider-ad.user.User.property.cannotChangePasswordInput"></a>

```java
public java.lang.Object getCannotChangePasswordInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `cityInput`<sup>Optional</sup> <a name="cityInput" id="@cdktf/provider-ad.user.User.property.cityInput"></a>

```java
public java.lang.String getCityInput();
```

- *Type:* java.lang.String

---

##### `companyInput`<sup>Optional</sup> <a name="companyInput" id="@cdktf/provider-ad.user.User.property.companyInput"></a>

```java
public java.lang.String getCompanyInput();
```

- *Type:* java.lang.String

---

##### `containerInput`<sup>Optional</sup> <a name="containerInput" id="@cdktf/provider-ad.user.User.property.containerInput"></a>

```java
public java.lang.String getContainerInput();
```

- *Type:* java.lang.String

---

##### `countryInput`<sup>Optional</sup> <a name="countryInput" id="@cdktf/provider-ad.user.User.property.countryInput"></a>

```java
public java.lang.String getCountryInput();
```

- *Type:* java.lang.String

---

##### `customAttributesInput`<sup>Optional</sup> <a name="customAttributesInput" id="@cdktf/provider-ad.user.User.property.customAttributesInput"></a>

```java
public java.lang.String getCustomAttributesInput();
```

- *Type:* java.lang.String

---

##### `departmentInput`<sup>Optional</sup> <a name="departmentInput" id="@cdktf/provider-ad.user.User.property.departmentInput"></a>

```java
public java.lang.String getDepartmentInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-ad.user.User.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-ad.user.User.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `divisionInput`<sup>Optional</sup> <a name="divisionInput" id="@cdktf/provider-ad.user.User.property.divisionInput"></a>

```java
public java.lang.String getDivisionInput();
```

- *Type:* java.lang.String

---

##### `emailAddressInput`<sup>Optional</sup> <a name="emailAddressInput" id="@cdktf/provider-ad.user.User.property.emailAddressInput"></a>

```java
public java.lang.String getEmailAddressInput();
```

- *Type:* java.lang.String

---

##### `employeeIdInput`<sup>Optional</sup> <a name="employeeIdInput" id="@cdktf/provider-ad.user.User.property.employeeIdInput"></a>

```java
public java.lang.String getEmployeeIdInput();
```

- *Type:* java.lang.String

---

##### `employeeNumberInput`<sup>Optional</sup> <a name="employeeNumberInput" id="@cdktf/provider-ad.user.User.property.employeeNumberInput"></a>

```java
public java.lang.String getEmployeeNumberInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-ad.user.User.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `faxInput`<sup>Optional</sup> <a name="faxInput" id="@cdktf/provider-ad.user.User.property.faxInput"></a>

```java
public java.lang.String getFaxInput();
```

- *Type:* java.lang.String

---

##### `givenNameInput`<sup>Optional</sup> <a name="givenNameInput" id="@cdktf/provider-ad.user.User.property.givenNameInput"></a>

```java
public java.lang.String getGivenNameInput();
```

- *Type:* java.lang.String

---

##### `homeDirectoryInput`<sup>Optional</sup> <a name="homeDirectoryInput" id="@cdktf/provider-ad.user.User.property.homeDirectoryInput"></a>

```java
public java.lang.String getHomeDirectoryInput();
```

- *Type:* java.lang.String

---

##### `homeDriveInput`<sup>Optional</sup> <a name="homeDriveInput" id="@cdktf/provider-ad.user.User.property.homeDriveInput"></a>

```java
public java.lang.String getHomeDriveInput();
```

- *Type:* java.lang.String

---

##### `homePageInput`<sup>Optional</sup> <a name="homePageInput" id="@cdktf/provider-ad.user.User.property.homePageInput"></a>

```java
public java.lang.String getHomePageInput();
```

- *Type:* java.lang.String

---

##### `homePhoneInput`<sup>Optional</sup> <a name="homePhoneInput" id="@cdktf/provider-ad.user.User.property.homePhoneInput"></a>

```java
public java.lang.String getHomePhoneInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-ad.user.User.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `initialPasswordInput`<sup>Optional</sup> <a name="initialPasswordInput" id="@cdktf/provider-ad.user.User.property.initialPasswordInput"></a>

```java
public java.lang.String getInitialPasswordInput();
```

- *Type:* java.lang.String

---

##### `initialsInput`<sup>Optional</sup> <a name="initialsInput" id="@cdktf/provider-ad.user.User.property.initialsInput"></a>

```java
public java.lang.String getInitialsInput();
```

- *Type:* java.lang.String

---

##### `mobilePhoneInput`<sup>Optional</sup> <a name="mobilePhoneInput" id="@cdktf/provider-ad.user.User.property.mobilePhoneInput"></a>

```java
public java.lang.String getMobilePhoneInput();
```

- *Type:* java.lang.String

---

##### `officeInput`<sup>Optional</sup> <a name="officeInput" id="@cdktf/provider-ad.user.User.property.officeInput"></a>

```java
public java.lang.String getOfficeInput();
```

- *Type:* java.lang.String

---

##### `officePhoneInput`<sup>Optional</sup> <a name="officePhoneInput" id="@cdktf/provider-ad.user.User.property.officePhoneInput"></a>

```java
public java.lang.String getOfficePhoneInput();
```

- *Type:* java.lang.String

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="@cdktf/provider-ad.user.User.property.organizationInput"></a>

```java
public java.lang.String getOrganizationInput();
```

- *Type:* java.lang.String

---

##### `otherNameInput`<sup>Optional</sup> <a name="otherNameInput" id="@cdktf/provider-ad.user.User.property.otherNameInput"></a>

```java
public java.lang.String getOtherNameInput();
```

- *Type:* java.lang.String

---

##### `passwordNeverExpiresInput`<sup>Optional</sup> <a name="passwordNeverExpiresInput" id="@cdktf/provider-ad.user.User.property.passwordNeverExpiresInput"></a>

```java
public java.lang.Object getPasswordNeverExpiresInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `poBoxInput`<sup>Optional</sup> <a name="poBoxInput" id="@cdktf/provider-ad.user.User.property.poBoxInput"></a>

```java
public java.lang.String getPoBoxInput();
```

- *Type:* java.lang.String

---

##### `postalCodeInput`<sup>Optional</sup> <a name="postalCodeInput" id="@cdktf/provider-ad.user.User.property.postalCodeInput"></a>

```java
public java.lang.String getPostalCodeInput();
```

- *Type:* java.lang.String

---

##### `principalNameInput`<sup>Optional</sup> <a name="principalNameInput" id="@cdktf/provider-ad.user.User.property.principalNameInput"></a>

```java
public java.lang.String getPrincipalNameInput();
```

- *Type:* java.lang.String

---

##### `samAccountNameInput`<sup>Optional</sup> <a name="samAccountNameInput" id="@cdktf/provider-ad.user.User.property.samAccountNameInput"></a>

```java
public java.lang.String getSamAccountNameInput();
```

- *Type:* java.lang.String

---

##### `smartCardLogonRequiredInput`<sup>Optional</sup> <a name="smartCardLogonRequiredInput" id="@cdktf/provider-ad.user.User.property.smartCardLogonRequiredInput"></a>

```java
public java.lang.Object getSmartCardLogonRequiredInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktf/provider-ad.user.User.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `streetAddressInput`<sup>Optional</sup> <a name="streetAddressInput" id="@cdktf/provider-ad.user.User.property.streetAddressInput"></a>

```java
public java.lang.String getStreetAddressInput();
```

- *Type:* java.lang.String

---

##### `surnameInput`<sup>Optional</sup> <a name="surnameInput" id="@cdktf/provider-ad.user.User.property.surnameInput"></a>

```java
public java.lang.String getSurnameInput();
```

- *Type:* java.lang.String

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-ad.user.User.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `trustedForDelegationInput`<sup>Optional</sup> <a name="trustedForDelegationInput" id="@cdktf/provider-ad.user.User.property.trustedForDelegationInput"></a>

```java
public java.lang.Object getTrustedForDelegationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `cannotChangePassword`<sup>Required</sup> <a name="cannotChangePassword" id="@cdktf/provider-ad.user.User.property.cannotChangePassword"></a>

```java
public java.lang.Object getCannotChangePassword();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `city`<sup>Required</sup> <a name="city" id="@cdktf/provider-ad.user.User.property.city"></a>

```java
public java.lang.String getCity();
```

- *Type:* java.lang.String

---

##### `company`<sup>Required</sup> <a name="company" id="@cdktf/provider-ad.user.User.property.company"></a>

```java
public java.lang.String getCompany();
```

- *Type:* java.lang.String

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktf/provider-ad.user.User.property.container"></a>

```java
public java.lang.String getContainer();
```

- *Type:* java.lang.String

---

##### `country`<sup>Required</sup> <a name="country" id="@cdktf/provider-ad.user.User.property.country"></a>

```java
public java.lang.String getCountry();
```

- *Type:* java.lang.String

---

##### `customAttributes`<sup>Required</sup> <a name="customAttributes" id="@cdktf/provider-ad.user.User.property.customAttributes"></a>

```java
public java.lang.String getCustomAttributes();
```

- *Type:* java.lang.String

---

##### `department`<sup>Required</sup> <a name="department" id="@cdktf/provider-ad.user.User.property.department"></a>

```java
public java.lang.String getDepartment();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-ad.user.User.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-ad.user.User.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `division`<sup>Required</sup> <a name="division" id="@cdktf/provider-ad.user.User.property.division"></a>

```java
public java.lang.String getDivision();
```

- *Type:* java.lang.String

---

##### `emailAddress`<sup>Required</sup> <a name="emailAddress" id="@cdktf/provider-ad.user.User.property.emailAddress"></a>

```java
public java.lang.String getEmailAddress();
```

- *Type:* java.lang.String

---

##### `employeeId`<sup>Required</sup> <a name="employeeId" id="@cdktf/provider-ad.user.User.property.employeeId"></a>

```java
public java.lang.String getEmployeeId();
```

- *Type:* java.lang.String

---

##### `employeeNumber`<sup>Required</sup> <a name="employeeNumber" id="@cdktf/provider-ad.user.User.property.employeeNumber"></a>

```java
public java.lang.String getEmployeeNumber();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-ad.user.User.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `fax`<sup>Required</sup> <a name="fax" id="@cdktf/provider-ad.user.User.property.fax"></a>

```java
public java.lang.String getFax();
```

- *Type:* java.lang.String

---

##### `givenName`<sup>Required</sup> <a name="givenName" id="@cdktf/provider-ad.user.User.property.givenName"></a>

```java
public java.lang.String getGivenName();
```

- *Type:* java.lang.String

---

##### `homeDirectory`<sup>Required</sup> <a name="homeDirectory" id="@cdktf/provider-ad.user.User.property.homeDirectory"></a>

```java
public java.lang.String getHomeDirectory();
```

- *Type:* java.lang.String

---

##### `homeDrive`<sup>Required</sup> <a name="homeDrive" id="@cdktf/provider-ad.user.User.property.homeDrive"></a>

```java
public java.lang.String getHomeDrive();
```

- *Type:* java.lang.String

---

##### `homePage`<sup>Required</sup> <a name="homePage" id="@cdktf/provider-ad.user.User.property.homePage"></a>

```java
public java.lang.String getHomePage();
```

- *Type:* java.lang.String

---

##### `homePhone`<sup>Required</sup> <a name="homePhone" id="@cdktf/provider-ad.user.User.property.homePhone"></a>

```java
public java.lang.String getHomePhone();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ad.user.User.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `initialPassword`<sup>Required</sup> <a name="initialPassword" id="@cdktf/provider-ad.user.User.property.initialPassword"></a>

```java
public java.lang.String getInitialPassword();
```

- *Type:* java.lang.String

---

##### `initials`<sup>Required</sup> <a name="initials" id="@cdktf/provider-ad.user.User.property.initials"></a>

```java
public java.lang.String getInitials();
```

- *Type:* java.lang.String

---

##### `mobilePhone`<sup>Required</sup> <a name="mobilePhone" id="@cdktf/provider-ad.user.User.property.mobilePhone"></a>

```java
public java.lang.String getMobilePhone();
```

- *Type:* java.lang.String

---

##### `office`<sup>Required</sup> <a name="office" id="@cdktf/provider-ad.user.User.property.office"></a>

```java
public java.lang.String getOffice();
```

- *Type:* java.lang.String

---

##### `officePhone`<sup>Required</sup> <a name="officePhone" id="@cdktf/provider-ad.user.User.property.officePhone"></a>

```java
public java.lang.String getOfficePhone();
```

- *Type:* java.lang.String

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-ad.user.User.property.organization"></a>

```java
public java.lang.String getOrganization();
```

- *Type:* java.lang.String

---

##### `otherName`<sup>Required</sup> <a name="otherName" id="@cdktf/provider-ad.user.User.property.otherName"></a>

```java
public java.lang.String getOtherName();
```

- *Type:* java.lang.String

---

##### `passwordNeverExpires`<sup>Required</sup> <a name="passwordNeverExpires" id="@cdktf/provider-ad.user.User.property.passwordNeverExpires"></a>

```java
public java.lang.Object getPasswordNeverExpires();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `poBox`<sup>Required</sup> <a name="poBox" id="@cdktf/provider-ad.user.User.property.poBox"></a>

```java
public java.lang.String getPoBox();
```

- *Type:* java.lang.String

---

##### `postalCode`<sup>Required</sup> <a name="postalCode" id="@cdktf/provider-ad.user.User.property.postalCode"></a>

```java
public java.lang.String getPostalCode();
```

- *Type:* java.lang.String

---

##### `principalName`<sup>Required</sup> <a name="principalName" id="@cdktf/provider-ad.user.User.property.principalName"></a>

```java
public java.lang.String getPrincipalName();
```

- *Type:* java.lang.String

---

##### `samAccountName`<sup>Required</sup> <a name="samAccountName" id="@cdktf/provider-ad.user.User.property.samAccountName"></a>

```java
public java.lang.String getSamAccountName();
```

- *Type:* java.lang.String

---

##### `smartCardLogonRequired`<sup>Required</sup> <a name="smartCardLogonRequired" id="@cdktf/provider-ad.user.User.property.smartCardLogonRequired"></a>

```java
public java.lang.Object getSmartCardLogonRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-ad.user.User.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `streetAddress`<sup>Required</sup> <a name="streetAddress" id="@cdktf/provider-ad.user.User.property.streetAddress"></a>

```java
public java.lang.String getStreetAddress();
```

- *Type:* java.lang.String

---

##### `surname`<sup>Required</sup> <a name="surname" id="@cdktf/provider-ad.user.User.property.surname"></a>

```java
public java.lang.String getSurname();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-ad.user.User.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `trustedForDelegation`<sup>Required</sup> <a name="trustedForDelegation" id="@cdktf/provider-ad.user.User.property.trustedForDelegation"></a>

```java
public java.lang.Object getTrustedForDelegation();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.user.User.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ad.user.User.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### UserConfig <a name="UserConfig" id="@cdktf/provider-ad.user.UserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ad.user.UserConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ad.user.UserConfig;

UserConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .displayName(java.lang.String)
    .principalName(java.lang.String)
    .samAccountName(java.lang.String)
//  .cannotChangePassword(java.lang.Boolean)
//  .cannotChangePassword(IResolvable)
//  .city(java.lang.String)
//  .company(java.lang.String)
//  .container(java.lang.String)
//  .country(java.lang.String)
//  .customAttributes(java.lang.String)
//  .department(java.lang.String)
//  .description(java.lang.String)
//  .division(java.lang.String)
//  .emailAddress(java.lang.String)
//  .employeeId(java.lang.String)
//  .employeeNumber(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .fax(java.lang.String)
//  .givenName(java.lang.String)
//  .homeDirectory(java.lang.String)
//  .homeDrive(java.lang.String)
//  .homePage(java.lang.String)
//  .homePhone(java.lang.String)
//  .id(java.lang.String)
//  .initialPassword(java.lang.String)
//  .initials(java.lang.String)
//  .mobilePhone(java.lang.String)
//  .office(java.lang.String)
//  .officePhone(java.lang.String)
//  .organization(java.lang.String)
//  .otherName(java.lang.String)
//  .passwordNeverExpires(java.lang.Boolean)
//  .passwordNeverExpires(IResolvable)
//  .poBox(java.lang.String)
//  .postalCode(java.lang.String)
//  .smartCardLogonRequired(java.lang.Boolean)
//  .smartCardLogonRequired(IResolvable)
//  .state(java.lang.String)
//  .streetAddress(java.lang.String)
//  .surname(java.lang.String)
//  .title(java.lang.String)
//  .trustedForDelegation(java.lang.Boolean)
//  .trustedForDelegation(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The Display Name of an Active Directory user. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.principalName">principalName</a></code> | <code>java.lang.String</code> | The Principal Name of an Active Directory user. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.samAccountName">samAccountName</a></code> | <code>java.lang.String</code> | The pre-win2k user logon name. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.cannotChangePassword">cannotChangePassword</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set to true, the user will not be allowed to change their password. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.city">city</a></code> | <code>java.lang.String</code> | Specifies the user's town or city. This parameter sets the City property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.company">company</a></code> | <code>java.lang.String</code> | Specifies the user's company. This parameter sets the Company property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.container">container</a></code> | <code>java.lang.String</code> | A DN of the container object that will be holding the user. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.country">country</a></code> | <code>java.lang.String</code> | Specifies the country by setting the country code (refer to ISO 3166). |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.customAttributes">customAttributes</a></code> | <code>java.lang.String</code> | JSON encoded map that represents key/value pairs for custom attributes. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.department">department</a></code> | <code>java.lang.String</code> | Specifies the user's department. This parameter sets the Department property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.description">description</a></code> | <code>java.lang.String</code> | Specifies a description of the object. This parameter sets the value of the Description property for the user object. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.division">division</a></code> | <code>java.lang.String</code> | Specifies the user's division. This parameter sets the Division property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.emailAddress">emailAddress</a></code> | <code>java.lang.String</code> | Specifies the user's e-mail address. This parameter sets the EmailAddress property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.employeeId">employeeId</a></code> | <code>java.lang.String</code> | Specifies the user's employee ID. This parameter sets the EmployeeID property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.employeeNumber">employeeNumber</a></code> | <code>java.lang.String</code> | Specifies the user's employee number. This parameter sets the EmployeeNumber property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set to false, the user will be disabled. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.fax">fax</a></code> | <code>java.lang.String</code> | Specifies the user's fax phone number. This parameter sets the Fax property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.givenName">givenName</a></code> | <code>java.lang.String</code> | Specifies the user's given name. This parameter sets the GivenName property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.homeDirectory">homeDirectory</a></code> | <code>java.lang.String</code> | Specifies a user's home directory. This parameter sets the HomeDirectory property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.homeDrive">homeDrive</a></code> | <code>java.lang.String</code> | Specifies a drive that is associated with the UNC path defined by the HomeDirectory property. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.homePage">homePage</a></code> | <code>java.lang.String</code> | Specifies the URL of the home page of the object. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.homePhone">homePhone</a></code> | <code>java.lang.String</code> | Specifies the user's home telephone number. This parameter sets the HomePhone property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#id User#id}. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.initialPassword">initialPassword</a></code> | <code>java.lang.String</code> | The user's initial password. This will be set on creation but will *not* be enforced in subsequent plans. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.initials">initials</a></code> | <code>java.lang.String</code> | Specifies the initials that represent part of a user's name. Maximum 6 char. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.mobilePhone">mobilePhone</a></code> | <code>java.lang.String</code> | Specifies the user's mobile phone number. This parameter sets the MobilePhone property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.office">office</a></code> | <code>java.lang.String</code> | Specifies the location of the user's office or place of business. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.officePhone">officePhone</a></code> | <code>java.lang.String</code> | Specifies the user's office telephone number. This parameter sets the OfficePhone property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.organization">organization</a></code> | <code>java.lang.String</code> | Specifies the user's organization. This parameter sets the Organization property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.otherName">otherName</a></code> | <code>java.lang.String</code> | Specifies a name in addition to a user's given name and surname, such as the user's middle name. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.passwordNeverExpires">passwordNeverExpires</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set to true, the password for this user will not expire. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.poBox">poBox</a></code> | <code>java.lang.String</code> | Specifies the user's post office box number. This parameter sets the POBox property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.postalCode">postalCode</a></code> | <code>java.lang.String</code> | Specifies the user's postal code or zip code. This parameter sets the PostalCode property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.smartCardLogonRequired">smartCardLogonRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set to true, a smart card is required to logon. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.state">state</a></code> | <code>java.lang.String</code> | Specifies the user's or Organizational Unit's state or province. This parameter sets the State property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.streetAddress">streetAddress</a></code> | <code>java.lang.String</code> | Specifies the user's street address. This parameter sets the StreetAddress property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.surname">surname</a></code> | <code>java.lang.String</code> | Specifies the user's last name or surname. This parameter sets the Surname property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.title">title</a></code> | <code>java.lang.String</code> | Specifies the user's title. This parameter sets the Title property of a user object. |
| <code><a href="#@cdktf/provider-ad.user.UserConfig.property.trustedForDelegation">trustedForDelegation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set to true, the user account is trusted for Kerberos delegation. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ad.user.UserConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ad.user.UserConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ad.user.UserConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ad.user.UserConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ad.user.UserConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ad.user.UserConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ad.user.UserConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-ad.user.UserConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The Display Name of an Active Directory user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#display_name User#display_name}

---

##### `principalName`<sup>Required</sup> <a name="principalName" id="@cdktf/provider-ad.user.UserConfig.property.principalName"></a>

```java
public java.lang.String getPrincipalName();
```

- *Type:* java.lang.String

The Principal Name of an Active Directory user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#principal_name User#principal_name}

---

##### `samAccountName`<sup>Required</sup> <a name="samAccountName" id="@cdktf/provider-ad.user.UserConfig.property.samAccountName"></a>

```java
public java.lang.String getSamAccountName();
```

- *Type:* java.lang.String

The pre-win2k user logon name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#sam_account_name User#sam_account_name}

---

##### `cannotChangePassword`<sup>Optional</sup> <a name="cannotChangePassword" id="@cdktf/provider-ad.user.UserConfig.property.cannotChangePassword"></a>

```java
public java.lang.Object getCannotChangePassword();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set to true, the user will not be allowed to change their password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#cannot_change_password User#cannot_change_password}

---

##### `city`<sup>Optional</sup> <a name="city" id="@cdktf/provider-ad.user.UserConfig.property.city"></a>

```java
public java.lang.String getCity();
```

- *Type:* java.lang.String

Specifies the user's town or city. This parameter sets the City property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#city User#city}

---

##### `company`<sup>Optional</sup> <a name="company" id="@cdktf/provider-ad.user.UserConfig.property.company"></a>

```java
public java.lang.String getCompany();
```

- *Type:* java.lang.String

Specifies the user's company. This parameter sets the Company property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#company User#company}

---

##### `container`<sup>Optional</sup> <a name="container" id="@cdktf/provider-ad.user.UserConfig.property.container"></a>

```java
public java.lang.String getContainer();
```

- *Type:* java.lang.String

A DN of the container object that will be holding the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#container User#container}

---

##### `country`<sup>Optional</sup> <a name="country" id="@cdktf/provider-ad.user.UserConfig.property.country"></a>

```java
public java.lang.String getCountry();
```

- *Type:* java.lang.String

Specifies the country by setting the country code (refer to ISO 3166).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#country User#country}

---

##### `customAttributes`<sup>Optional</sup> <a name="customAttributes" id="@cdktf/provider-ad.user.UserConfig.property.customAttributes"></a>

```java
public java.lang.String getCustomAttributes();
```

- *Type:* java.lang.String

JSON encoded map that represents key/value pairs for custom attributes.

Please note that `terraform import` will not import these attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#custom_attributes User#custom_attributes}

---

##### `department`<sup>Optional</sup> <a name="department" id="@cdktf/provider-ad.user.UserConfig.property.department"></a>

```java
public java.lang.String getDepartment();
```

- *Type:* java.lang.String

Specifies the user's department. This parameter sets the Department property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#department User#department}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-ad.user.UserConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Specifies a description of the object. This parameter sets the value of the Description property for the user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#description User#description}

---

##### `division`<sup>Optional</sup> <a name="division" id="@cdktf/provider-ad.user.UserConfig.property.division"></a>

```java
public java.lang.String getDivision();
```

- *Type:* java.lang.String

Specifies the user's division. This parameter sets the Division property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#division User#division}

---

##### `emailAddress`<sup>Optional</sup> <a name="emailAddress" id="@cdktf/provider-ad.user.UserConfig.property.emailAddress"></a>

```java
public java.lang.String getEmailAddress();
```

- *Type:* java.lang.String

Specifies the user's e-mail address. This parameter sets the EmailAddress property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#email_address User#email_address}

---

##### `employeeId`<sup>Optional</sup> <a name="employeeId" id="@cdktf/provider-ad.user.UserConfig.property.employeeId"></a>

```java
public java.lang.String getEmployeeId();
```

- *Type:* java.lang.String

Specifies the user's employee ID. This parameter sets the EmployeeID property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#employee_id User#employee_id}

---

##### `employeeNumber`<sup>Optional</sup> <a name="employeeNumber" id="@cdktf/provider-ad.user.UserConfig.property.employeeNumber"></a>

```java
public java.lang.String getEmployeeNumber();
```

- *Type:* java.lang.String

Specifies the user's employee number. This parameter sets the EmployeeNumber property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#employee_number User#employee_number}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-ad.user.UserConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set to false, the user will be disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#enabled User#enabled}

---

##### `fax`<sup>Optional</sup> <a name="fax" id="@cdktf/provider-ad.user.UserConfig.property.fax"></a>

```java
public java.lang.String getFax();
```

- *Type:* java.lang.String

Specifies the user's fax phone number. This parameter sets the Fax property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#fax User#fax}

---

##### `givenName`<sup>Optional</sup> <a name="givenName" id="@cdktf/provider-ad.user.UserConfig.property.givenName"></a>

```java
public java.lang.String getGivenName();
```

- *Type:* java.lang.String

Specifies the user's given name. This parameter sets the GivenName property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#given_name User#given_name}

---

##### `homeDirectory`<sup>Optional</sup> <a name="homeDirectory" id="@cdktf/provider-ad.user.UserConfig.property.homeDirectory"></a>

```java
public java.lang.String getHomeDirectory();
```

- *Type:* java.lang.String

Specifies a user's home directory. This parameter sets the HomeDirectory property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#home_directory User#home_directory}

---

##### `homeDrive`<sup>Optional</sup> <a name="homeDrive" id="@cdktf/provider-ad.user.UserConfig.property.homeDrive"></a>

```java
public java.lang.String getHomeDrive();
```

- *Type:* java.lang.String

Specifies a drive that is associated with the UNC path defined by the HomeDirectory property.

The drive letter is specified as <DriveLetter>: where <DriveLetter> indicates the letter of the drive to associate. The <DriveLetter> must be a single, uppercase letter and the colon is required. This parameter sets the HomeDrive property of the user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#home_drive User#home_drive}

---

##### `homePage`<sup>Optional</sup> <a name="homePage" id="@cdktf/provider-ad.user.UserConfig.property.homePage"></a>

```java
public java.lang.String getHomePage();
```

- *Type:* java.lang.String

Specifies the URL of the home page of the object.

This parameter sets the homePage property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#home_page User#home_page}

---

##### `homePhone`<sup>Optional</sup> <a name="homePhone" id="@cdktf/provider-ad.user.UserConfig.property.homePhone"></a>

```java
public java.lang.String getHomePhone();
```

- *Type:* java.lang.String

Specifies the user's home telephone number. This parameter sets the HomePhone property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#home_phone User#home_phone}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ad.user.UserConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#id User#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initialPassword`<sup>Optional</sup> <a name="initialPassword" id="@cdktf/provider-ad.user.UserConfig.property.initialPassword"></a>

```java
public java.lang.String getInitialPassword();
```

- *Type:* java.lang.String

The user's initial password. This will be set on creation but will *not* be enforced in subsequent plans.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#initial_password User#initial_password}

---

##### `initials`<sup>Optional</sup> <a name="initials" id="@cdktf/provider-ad.user.UserConfig.property.initials"></a>

```java
public java.lang.String getInitials();
```

- *Type:* java.lang.String

Specifies the initials that represent part of a user's name. Maximum 6 char.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#initials User#initials}

---

##### `mobilePhone`<sup>Optional</sup> <a name="mobilePhone" id="@cdktf/provider-ad.user.UserConfig.property.mobilePhone"></a>

```java
public java.lang.String getMobilePhone();
```

- *Type:* java.lang.String

Specifies the user's mobile phone number. This parameter sets the MobilePhone property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#mobile_phone User#mobile_phone}

---

##### `office`<sup>Optional</sup> <a name="office" id="@cdktf/provider-ad.user.UserConfig.property.office"></a>

```java
public java.lang.String getOffice();
```

- *Type:* java.lang.String

Specifies the location of the user's office or place of business.

This parameter sets the Office property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#office User#office}

---

##### `officePhone`<sup>Optional</sup> <a name="officePhone" id="@cdktf/provider-ad.user.UserConfig.property.officePhone"></a>

```java
public java.lang.String getOfficePhone();
```

- *Type:* java.lang.String

Specifies the user's office telephone number. This parameter sets the OfficePhone property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#office_phone User#office_phone}

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-ad.user.UserConfig.property.organization"></a>

```java
public java.lang.String getOrganization();
```

- *Type:* java.lang.String

Specifies the user's organization. This parameter sets the Organization property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#organization User#organization}

---

##### `otherName`<sup>Optional</sup> <a name="otherName" id="@cdktf/provider-ad.user.UserConfig.property.otherName"></a>

```java
public java.lang.String getOtherName();
```

- *Type:* java.lang.String

Specifies a name in addition to a user's given name and surname, such as the user's middle name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#other_name User#other_name}

---

##### `passwordNeverExpires`<sup>Optional</sup> <a name="passwordNeverExpires" id="@cdktf/provider-ad.user.UserConfig.property.passwordNeverExpires"></a>

```java
public java.lang.Object getPasswordNeverExpires();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set to true, the password for this user will not expire.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#password_never_expires User#password_never_expires}

---

##### `poBox`<sup>Optional</sup> <a name="poBox" id="@cdktf/provider-ad.user.UserConfig.property.poBox"></a>

```java
public java.lang.String getPoBox();
```

- *Type:* java.lang.String

Specifies the user's post office box number. This parameter sets the POBox property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#po_box User#po_box}

---

##### `postalCode`<sup>Optional</sup> <a name="postalCode" id="@cdktf/provider-ad.user.UserConfig.property.postalCode"></a>

```java
public java.lang.String getPostalCode();
```

- *Type:* java.lang.String

Specifies the user's postal code or zip code. This parameter sets the PostalCode property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#postal_code User#postal_code}

---

##### `smartCardLogonRequired`<sup>Optional</sup> <a name="smartCardLogonRequired" id="@cdktf/provider-ad.user.UserConfig.property.smartCardLogonRequired"></a>

```java
public java.lang.Object getSmartCardLogonRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set to true, a smart card is required to logon.

This parameter sets the SmartCardLoginRequired property for a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#smart_card_logon_required User#smart_card_logon_required}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-ad.user.UserConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Specifies the user's or Organizational Unit's state or province. This parameter sets the State property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#state User#state}

---

##### `streetAddress`<sup>Optional</sup> <a name="streetAddress" id="@cdktf/provider-ad.user.UserConfig.property.streetAddress"></a>

```java
public java.lang.String getStreetAddress();
```

- *Type:* java.lang.String

Specifies the user's street address. This parameter sets the StreetAddress property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#street_address User#street_address}

---

##### `surname`<sup>Optional</sup> <a name="surname" id="@cdktf/provider-ad.user.UserConfig.property.surname"></a>

```java
public java.lang.String getSurname();
```

- *Type:* java.lang.String

Specifies the user's last name or surname. This parameter sets the Surname property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#surname User#surname}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-ad.user.UserConfig.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

Specifies the user's title. This parameter sets the Title property of a user object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#title User#title}

---

##### `trustedForDelegation`<sup>Optional</sup> <a name="trustedForDelegation" id="@cdktf/provider-ad.user.UserConfig.property.trustedForDelegation"></a>

```java
public java.lang.Object getTrustedForDelegation();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set to true, the user account is trusted for Kerberos delegation.

A service that runs under an account that is trusted for Kerberos delegation can assume the identity of a client requesting the service. This parameter sets the TrustedForDelegation property of an account object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/ad/0.4.4/docs/resources/user#trusted_for_delegation User#trusted_for_delegation}

---



